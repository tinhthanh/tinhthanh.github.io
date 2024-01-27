import { generateUuid4 } from "../../modules/form-field/db-utils";
import { IElementUi } from "../element.ui";
// update node by id
const  updateNode = (root: IElementUi, nodeId: string, updatedData: Partial<IElementUi>): IElementUi | null => {
  // Hàm đệ quy để tìm và cập nhật node
  const findAndUpdateNode = (currentNode: IElementUi): IElementUi | null => {
      if (currentNode.id === nodeId) {
          // Nếu tìm thấy node, cập nhật thông tin và trả về node đã cập nhật
          return {
              ...currentNode,
              ...updatedData,
          };
      }

      if (currentNode.children) {
          // Duyệt qua từng child nếu có
          for (const key in currentNode.children) {
              const updatedChild = findAndUpdateNode(currentNode.children[key]);
              if (updatedChild) {
                  // Nếu child đã được cập nhật, cập nhật lại danh sách children
                  currentNode.children[key] = updatedChild;
                  return currentNode; // Trả về node cha đã được cập nhật
              }
          }
      }

      return null; // Không tìm thấy node cần cập nhật
  };

  // Bắt đầu đệ quy từ root
  const updatedRoot = findAndUpdateNode(root);

  if (updatedRoot) {
      // Nếu node cần cập nhật là root, trả về root đã được cập nhật
      return updatedRoot;
  } else {
      // Nếu không tìm thấy node cần cập nhật, trả về null
      return null;
  }
}
 const removeNode = (
  root: IElementUi,
  node: IElementUi
): IElementUi | null => {
  // Kiểm tra nếu root hoặc node là null
  if (!root || !node) {
    return root;
  }
  // Kiểm tra nếu root chính là node cần xóa
  if (root === node) {
    return null; // Trả về null để chỉ ra rằng node đã được loại bỏ
  }
  // Kiểm tra nếu có children và kiểm tra từng child
  if (root.children) {
    const updatedChildren: { [key: string]: IElementUi } = {};
    // Duyệt qua từng child
    Object.keys(root.children).forEach((key) => {
      // Gọi đệ quy để xóa node từ children và cập nhật lại danh sách children
      let updatedChild;
      if (root.children) {
        updatedChild = removeNode(root.children[key], node);
      }
      // Chỉ thêm child vào danh sách nếu nó không bị xóa
      if (updatedChild) {
        updatedChildren[key] = updatedChild;
      }
    });
    // Cập nhật lại children của root
    root.children = updatedChildren;
    // Trả về root đã được cập nhật
    return root;
  }
  // Trường hợp không có children, trả về root ban đầu vì không có gì thay đổi
  return root;
};
export const addUuidToElement = <T extends IElementUi>(
  element: T,
  parent: T | null = null
): T => {
  const newElement: T = {
    ...element,
    id: element?.id || generateUuid4(),
    parent: parent,
    attributes: { open: true, ...(element.attributes || {}) },
  };
  if (element.children) {
    // Nếu có children, thực hiện đệ quy để thêm id và parent cho từng child
    newElement.children = {};
    Object.keys(element.children).forEach((key) => {
      if (element.children && element.children[key] && !element.id) {
        (newElement.children as any)[key] = addUuidToElement(
          element.children[key],
          newElement
        );
      }
    });
  }
  return newElement;
};
const addNode = (root: IElementUi,data: Readonly<{ parent: IElementUi; node: IElementUi }>) => {
  const id = generateUuid4();
  const nodeNew: IElementUi = { ...data.node, id, parent: data.parent };
  // Hàm đệ quy để tìm và thêm node vào cây
  const findAndAddNode = (currentNode: IElementUi): boolean => {
    if (currentNode.id === data.parent.id) {
      // Nếu tìm thấy parent, thêm node vào danh sách children của parent
      if (!currentNode.children) {
        currentNode.children = {};
      }
      if (currentNode.children && nodeNew.id) {
        currentNode.children[nodeNew.id] = nodeNew;
      }
      return true; // Kết thúc đệ quy vì đã thêm node vào cây
    }
    if (currentNode.children) {
      // Duyệt qua từng child nếu có
      for (const key in currentNode.children) {
        if (findAndAddNode(currentNode.children[key])) {
          return true; // Nếu tìm thấy và thêm node, kết thúc đệ quy
        }
      }
    }
    return false; // Không tìm thấy parent trong cây
  };
  // Bắt đầu đệ quy từ root
  findAndAddNode(root);
}
export const NodeUtils = {
  addNode, // them node
  updateNode, // cập nhật một node
  removeNode, // xóa một node
  addUuidToElement // thêm uuid vào node cho trường hợp thiếu id
}
