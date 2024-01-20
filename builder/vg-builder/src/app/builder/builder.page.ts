import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import {
  Column,
  Container,
  IElementUi,
  PageUi,
  Row,
  UiForm,
  UiIframe,
  UiImage,
} from './element.ui';
import { TreeElementPage } from './tree-element/tree-element.page';
import { SettingElementPage } from './setting-element/setting-element.page';
import { ReviewPagePage } from './review-page/review-page.page';
import { ChromeBrowserPage } from './chrome-brower/chrome-browser.page';
import { DeviceIphonePage } from './device-iphone/device-iphone.page';
import { FormControl } from '@angular/forms';
import { EmailField, PhoneField, InputNumberField, DateTimeField, TextField, RadioField, ArrayObject, CheckBoxField, ObjectFields, SwitchBoxField, TextareaField, SelectField, DateField } from '../modules/form-field/form.field';
import { generateUuid4 } from '../modules/form-field/db-utils';
import { EventBusService } from './node-state/event-bus.service';
const data = {
  email: new EmailField({
    required: true,
    label: 'Email',
    name: 'email',
    placeholder: 'Email',
    classes: 'col-12 col-xs-12 col-sm-6',
    onChange: (field: EmailField, control: FormControl) => {},
  }),
  phone: new PhoneField({
    required: true,
    label: 'Số điện thoại',
    name: 'phone',
    placeholder: '(090) 000 0000',
    classes: 'col-12 col-xs-12 col-sm-6',
  }),
  balance: new InputNumberField({
    required: true,
    label: 'Công nợ',
    name: 'balance',
    min: 10,
    max: 1000,
    placeholder: 'Công nợ'
  }),
  dateTime: new DateTimeField({
    required: true,
    label: 'Date time',
    name: 'dateTime',
  }),
  userName: new TextField({
    required: true,
    label: 'Tên khách hàng',
    name: 'userName',
    maxLength: 25,
    minLength: 3,
    placeholder: 'Ten khach nek'
  }),
  radio2: new RadioField({
    required: true,
    name: 'radio2',
    label: 'Danh sách',
    options: [
      {
        label: 'Chọn không',
        value: false,
      },
      {
        label: 'Chọn có',
        value: true,
      },
    ],
  }),
  pets: new ArrayObject({
    name: 'pets',
    label: 'Danh sach thu cung',
    property: {
      petName: new TextField({
        required: true,
        label: 'Tên thú cưng',
        name: 'petName',
      }),
      petHistory: new ArrayObject({
        name: 'petHistory',
        label: 'Lich Su Kham Benh',
        property: {
          type: new TextField({
            required: true,
            label: 'Loi',
            name: 'type',
            classes: 'col-6',
          }),
          triuTrung: new TextField({
            required: true,
            label: 'Triu chung',
            name: 'triuTrung',
            classes: 'col-6',
          }),
          loiDan: new TextField({
            required: true,
            label: 'Loi Dan',
            name: 'loiDan',
          }),
          booking: new ArrayObject({
            name: 'booking',
            label: 'Danh sach booking',
            property: {
              type: new TextField({
                required: true,
                label: 'Loi',
                name: 'type',
              }),
              triuTrung: new TextField({
                required: true,
                label: 'Triu chung',
                name: 'triuTrung',
              }),
              loiDan: new TextField({
                required: true,
                label: 'Loi Dan',
                name: 'loiDan',
              }),
            },
          }),
        },
      }),
    },
  }),
  checkbox2: new CheckBoxField({
    required: true,
    label: 'Check box field',
    name: 'checkbox2',
  }),
  checkbox3: new CheckBoxField({
    label: 'Check box field 3',
    name: 'checkbox3',
  }),
  details: new ObjectFields({
    name: 'details',
    label: 'Thông tin khách hàng',
    property: {
      switch: new SwitchBoxField({
        name: 'switch',
        label: 'Switch',
      }),
      textarea: new TextareaField({
        required: true,
        label: 'Text area',
        name: 'textarea',
        placeholder: 'Text area',
        disabled: false,
        maxLength: 25,
        minLength: 3,
      }),
      select: new SelectField({
        required: true,
        label: 'Select field',
        name: 'select',
        searchable: true,
        options: [
          {
            label: 'Huỳnh tính thành',
            value: 'Nam',
          },
          {
            label: 'Lệ thị thắm',
            value: 'NU',
          },
        ],
        onChange: (field: SelectField, control: FormControl) => {
         if(control.parent && control.parent.get('textarea')) {
           const textarea = control.parent.get('textarea') as FormControl;
            textarea.setValue(null);
         }
        },
      }),
      checkbox: new CheckBoxField({
        label: 'Check box field',
        name: 'checkbox',
      }),
    },
  }),
  radio: new RadioField({
    name: 'radio',
    options: [
      {
        label: 'Chọn không',
        value: false,
      },
      {
        label: 'Chọn có',
        value: true,
      },
    ],
  }),
  dateField: new DateField({
    required: true,
    label: 'Date Field',
    name: 'dateField',
  }),
  listObject: new ArrayObject({
    name: 'listObject',
    label: 'List Object',
    property: {
      textField2: new TextField({
        required: true,
        label: 'Text Field 2',
        name: 'textField2',
      }),
      textField22: new ObjectFields({
        name: 'textField22',
        label: 'Thông tin khách hàng',
        property: {
          textField22: new TextField({
            required: true,
            label: 'Text Field 22',
            name: 'textField22',
          }),
        },
      }),
      listOfList: new ArrayObject({
        name: 'listOfList',
        label: 'List Object',
        property: {
          name: new TextField({
            required: true,
            label: 'Text name',
            name: 'name',
          }),
        },
      }),
    },
  }),
};
const patchValue = {
  // "email": "k40cntt@gmial.com",
  phone: '0981772762',
  balance: 12,
  dateTime: '04/03/2023 12:12',
  userName: 'Thanh',
  // radio2: false,
  checkbox2: true,
  checkbox3: null,
  details: {
    switch: true,
    textarea: '22222',
    // select: 'Nam',
    checkbox: null,
  },
  radio: null,
  dateField: '04/02/1995',
  listObject: [{ textField2: '123', listOfList: [{ name: '123' }] }],
};
@Component({
  selector: 'app-ui-builder',
  template: `
    @if(uiElement) {
      <div class="d-flex flex-row ">
      <app-tree-element (vgaddNode)="addNode($event)" (vgRemoveNode)="removeNode($event)" [uiElement]="uiElement"></app-tree-element>
      <div class="builder-review">
        <!-- <app-device-iphone>
        <app-review-page [uiElement]="uiElement" ></app-review-page>
        </app-device-iphone> -->
        <app-chrome-browser>
          <app-review-page [uiElement]="uiElement"></app-review-page>
        </app-chrome-browser>
      </div>
      <app-setting-element></app-setting-element>
    </div>
    }
  `,
  styles: [
    `
      :host {
        color: coral;
        background-color: white;

      }
      .builder-review {
        flex: 1;
        border: 1px solid red;
        padding: 20px;
      }
      app-tree-element {
        width: 300px;
        height: 100vh;
        border: 1px solid red;
        overflow: auto;
      }
      app-setting-element {
        width: 300px;
        height: 100vh;
        border: 1px solid red;
        overflow: auto;
      }
    `,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TreeElementPage,
    SettingElementPage,
    ReviewPagePage,
    ChromeBrowserPage,
    DeviceIphonePage,
  ],
})
export class UiBuilderPage  implements OnInit{
  private eventBus = inject(EventBusService);
  uiElement!:IElementUi ;
  removeNode(node: IElementUi ) {
    // TODO giúp tôi remove node trong root và return về root
    this.uiElement = removeNodeEl({...this.uiElement} , node) as IElementUi;
    console.log('remove', node)
  }
  ngOnInit(): void {
    this.uiElement  = addUuidToElement(new PageUi({
        label: 'Login page',
        children: {
          header: new Container({
            label: 'Container',
            children: {
              header: new Row({
                label: 'row nenk',
                children: {
                  col: new Column({
                    label: 'col 1',
                    children: {
                      c: new  Container({
                        label: 'Container chil',
                        children: {}
                      })
                    },
                  }),
                  col2: new Column({
                    label: 'col 2',
                    children: {},
                  }),
                  col3: new Column({
                    label: 'col 3 ',
                    children: {},
                  }),
                },
              }),
              content: new Row({
                label: 'content',
                children: {},
              }),
              iframe: new Row({
                label: 'iframe',
                children: {
                  img: new UiIframe({src : "https://assets.vetgo.vn/iframe/baner/kippo-hover/"})
                },
              }),
              form:  new UiForm({
                label: 'form',
                config: data,
                patchValue: patchValue
              }),
              footer: new Row({
                label: 'footer',
                children: {
                  img: new UiImage({src : "https://storage.test.finos.asia/hdi-public-test-bucket-static-resource/2023/01/Group-1238-1.png"})
                },
              }),
            },
          }),
        },
      }));
    }
    addNode(data:Readonly<{parent:IElementUi,node: IElementUi}>) {
      const root: IElementUi = this.uiElement;
      const id = generateUuid4();
      const nodeNew: IElementUi = { ...(data.node),id, children: {},parent: data.parent };
      // Hàm đệ quy để tìm và thêm node vào cây
      const findAndAddNode = (currentNode: IElementUi): boolean => {
          if (currentNode.id === data.parent.id) {
              // Nếu tìm thấy parent, thêm node vào danh sách children của parent
              if (!currentNode.children) {
                  currentNode.children = {};
              }
              if(currentNode.children && nodeNew.id) {
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
      this.uiElement = {...root};
    }
}
export const addUuidToElement = <T extends IElementUi>(element: T, parent: T | null = null): T => {
  const newElement: T = {
      ...element,
      id: generateUuid4(),
      parent: parent,
      htmlAttributes: {open: true,...(element.htmlAttributes || {})}
  };
  if (element.children) {
      // Nếu có children, thực hiện đệ quy để thêm id và parent cho từng child
      newElement.children = {};
      Object.keys(element.children).forEach((key) => {
        if(element.children && element.children[key] && !element.id) { 
           (newElement.children as any)[key] = addUuidToElement(element.children[key], newElement);
        }
      });
  }
  return newElement;
}
export const removeNodeEl = (root: IElementUi, node:  IElementUi): IElementUi | null => {
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
          let updatedChild
          if(root.children) {
             updatedChild = removeNodeEl(root.children[key], node);
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
}