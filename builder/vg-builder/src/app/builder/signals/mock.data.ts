import { NodeUtils } from './node.util';
export const mockPatchValue = {
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

export const mockPage = NodeUtils.addUuidToElement(
  {
    "type": "page",
    "label": "Login page",
    "groupType": "page",
    "order": -1,
    "classes": "w-100",
    "children": {
        "header": {
            "type": "container",
            "label": "Container",
            "groupType": "layout",
            "order": -1,
            "classes": "container min-h-25",
            "children": {
                "header": {
                    "type": "row",
                    "label": "row nenk",
                    "groupType": "layout",
                    "order": -1,
                    "classes": "row min-h-25",
                    "children": {
                        "col": {
                            "type": "column",
                            "label": "col 1",
                            "groupType": "layout",
                            "order": -1,
                            "classes": "col min-h-25",
                            "children": {
                                "c": {
                                    "type": "container",
                                    "label": "Container chil",
                                    "groupType": "layout",
                                    "order": -1,
                                    "classes": "container min-h-25",
                                    "children": {}
                                }
                            }
                        },
                        "col2": {
                            "type": "column",
                            "label": "col 2",
                            "groupType": "layout",
                            "order": -1,
                            "classes": "col min-h-25",
                            "children": {}
                        },
                        "col3": {
                            "type": "column",
                            "label": "col 3 ",
                            "groupType": "layout",
                            "order": -1,
                            "classes": "col min-h-25",
                            "children": {}
                        }
                    }
                },
                "content": {
                    "type": "row",
                    "label": "content",
                    "groupType": "layout",
                    "order": -1,
                    "classes": "row min-h-25",
                    "children": {}
                },
                "iframe": {
                    "type": "row",
                    "label": "iframe",
                    "groupType": "layout",
                    "order": -1,
                    "classes": "row min-h-25",
                    "children": {
                        "img": {
                            "type": "iframe",
                            "label": "iframe",
                            "groupType": "base",
                            "order": -1,
                            "classes": "",
                            "width": "100%",
                            "height": "100%",
                            "src": "https://assets.vetgo.vn/iframe/baner/kippo-hover/"
                        }
                    }
                },
                "form": {
                    "type": "form",
                    "label": "form",
                    "groupType": "form",
                    "order": -1,
                    "classes": "",
                    "config": {
                        "email": {
                            "required": true,
                            "name": "email",
                            "placeholder": "Email",
                            "type": "email",
                            "label": "Email",
                            "classes": "col-12 col-xs-12 col-sm-6"
                        },
                        "phone": {
                            "name": "phone",
                            "type": "phone",
                            "placeholder": "(090) 000 0000",
                            "label": "Số điện thoại",
                            "required": true,
                            "classes": "col-12 col-xs-12 col-sm-6"
                        },
                        "balance": {
                            "name": "balance",
                            "type": "number",
                            "placeholder": "Công nợ",
                            "label": "Công nợ",
                            "required": true,
                            "min": 10,
                            "max": 1000
                        },
                        "dateTime": {
                            "required": true,
                            "name": "dateTime",
                            "type": "dateTime",
                            "label": "Date time"
                        },
                        "userName": {
                            "required": true,
                            "name": "userName",
                            "placeholder": "Ten khach nek",
                            "type": "text",
                            "maxLength": 25,
                            "minLength": 3,
                            "label": "Tên khách hàng"
                        },
                        "radio2": {
                            "name": "radio2",
                            "type": "radio",
                            "options": [
                                {
                                    "label": "Chọn không",
                                    "value": false
                                },
                                {
                                    "label": "Chọn có",
                                    "value": true
                                }
                            ],
                            "label": "Danh sách",
                            "required": true
                        },
                        "pets": {
                            "name": "pets",
                            "type": "ArrayObject",
                            "label": "Danh sach thu cung",
                            "property": {
                                "petName": {
                                    "required": true,
                                    "name": "petName",
                                    "placeholder": "",
                                    "type": "text",
                                    "maxLength": 255,
                                    "minLength": null,
                                    "label": "Tên thú cưng"
                                },
                                "petHistory": {
                                    "name": "petHistory",
                                    "type": "ArrayObject",
                                    "label": "Lich Su Kham Benh",
                                    "property": {
                                        "type": {
                                            "required": true,
                                            "name": "type",
                                            "placeholder": "",
                                            "type": "text",
                                            "maxLength": 255,
                                            "minLength": null,
                                            "label": "Loi",
                                            "classes": "col-6"
                                        },
                                        "triuTrung": {
                                            "required": true,
                                            "name": "triuTrung",
                                            "placeholder": "",
                                            "type": "text",
                                            "maxLength": 255,
                                            "minLength": null,
                                            "label": "Triu chung",
                                            "classes": "col-6"
                                        },
                                        "loiDan": {
                                            "required": true,
                                            "name": "loiDan",
                                            "placeholder": "",
                                            "type": "text",
                                            "maxLength": 255,
                                            "minLength": null,
                                            "label": "Loi Dan"
                                        },
                                        "booking": {
                                            "name": "booking",
                                            "type": "ArrayObject",
                                            "label": "Danh sach booking",
                                            "property": {
                                                "type": {
                                                    "required": true,
                                                    "name": "type",
                                                    "placeholder": "",
                                                    "type": "text",
                                                    "maxLength": 255,
                                                    "minLength": null,
                                                    "label": "Loi"
                                                },
                                                "triuTrung": {
                                                    "required": true,
                                                    "name": "triuTrung",
                                                    "placeholder": "",
                                                    "type": "text",
                                                    "maxLength": 255,
                                                    "minLength": null,
                                                    "label": "Triu chung"
                                                },
                                                "loiDan": {
                                                    "required": true,
                                                    "name": "loiDan",
                                                    "placeholder": "",
                                                    "type": "text",
                                                    "maxLength": 255,
                                                    "minLength": null,
                                                    "label": "Loi Dan"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "checkbox2": {
                            "name": "checkbox2",
                            "type": "checkbox",
                            "label": "Check box field",
                            "required": true
                        },
                        "checkbox3": {
                            "name": "checkbox3",
                            "type": "checkbox",
                            "label": "Check box field 3"
                        },
                        "details": {
                            "name": "details",
                            "type": "ObjectFields",
                            "label": "Thông tin khách hàng",
                            "property": {
                                "switch": {
                                    "name": "switch",
                                    "type": "switch",
                                    "label": "Switch"
                                },
                                "textarea": {
                                    "required": true,
                                    "name": "textarea",
                                    "type": "textarea",
                                    "label": "Text area",
                                    "placeholder": "Text area",
                                    "minHeight": 104,
                                    "maxLength": 25,
                                    "minLength": 3,
                                    "disabled": false
                                },
                                "select": {
                                    "name": "select",
                                    "type": "select",
                                    "options": [
                                        {
                                            "label": "Huỳnh tính thành",
                                            "value": "Nam"
                                        },
                                        {
                                            "label": "Lệ thị thắm",
                                            "value": "NU"
                                        }
                                    ],
                                    "searchable": true,
                                    "label": "Select field",
                                    "required": true
                                },
                                "checkbox": {
                                    "name": "checkbox",
                                    "type": "checkbox",
                                    "label": "Check box field"
                                }
                            }
                        },
                        "radio": {
                            "name": "radio",
                            "type": "radio",
                            "options": [
                                {
                                    "label": "Chọn không",
                                    "value": false
                                },
                                {
                                    "label": "Chọn có",
                                    "value": true
                                }
                            ],
                            "label": ""
                        },
                        "dateField": {
                            "required": true,
                            "name": "dateField",
                            "type": "date",
                            "label": "Date Field"
                        },
                        "listObject": {
                            "name": "listObject",
                            "type": "ArrayObject",
                            "label": "List Object",
                            "property": {
                                "textField2": {
                                    "required": true,
                                    "name": "textField2",
                                    "placeholder": "",
                                    "type": "text",
                                    "maxLength": 255,
                                    "minLength": null,
                                    "label": "Text Field 2"
                                },
                                "textField22": {
                                    "name": "textField22",
                                    "type": "ObjectFields",
                                    "label": "Thông tin khách hàng",
                                    "property": {
                                        "textField22": {
                                            "required": true,
                                            "name": "textField22",
                                            "placeholder": "",
                                            "type": "text",
                                            "maxLength": 255,
                                            "minLength": null,
                                            "label": "Text Field 22"
                                        }
                                    }
                                },
                                "listOfList": {
                                    "name": "listOfList",
                                    "type": "ArrayObject",
                                    "label": "List Object",
                                    "property": {
                                        "name": {
                                            "required": true,
                                            "name": "name",
                                            "placeholder": "",
                                            "type": "text",
                                            "maxLength": 255,
                                            "minLength": null,
                                            "label": "Text name"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "patchValue": {
                        "phone": "0981772762",
                        "balance": 12,
                        "dateTime": "04/03/2023 12:12",
                        "userName": "Thanh",
                        "checkbox2": true,
                        "checkbox3": null,
                        "details": {
                            "switch": true,
                            "textarea": "22222",
                            "checkbox": null
                        },
                        "radio": null,
                        "dateField": "04/02/1995",
                        "listObject": [
                            {
                                "textField2": "123",
                                "listOfList": [
                                    {
                                        "name": "123"
                                    }
                                ]
                            }
                        ]
                    }
                },
                "footer": {
                    "type": "row",
                    "label": "footer",
                    "groupType": "layout",
                    "order": -1,
                    "classes": "row min-h-25",
                    "children": {
                        "img": {
                            "type": "image",
                            "label": "image",
                            "groupType": "base",
                            "order": -1,
                            "classes": "",
                            "src": "https://storage.test.finos.asia/hdi-public-test-bucket-static-resource/2023/01/Group-1238-1.png"
                        }
                    }
                }
            }
        }
    }
} as any
);
