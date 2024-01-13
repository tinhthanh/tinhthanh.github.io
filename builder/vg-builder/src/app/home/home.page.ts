import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonIcon} from '@ionic/angular/standalone';
import {FormFieldModule} from "../modules/form-field/form-field.module";
import {
  ArrayObject, CheckBoxField, DateField,
  DateTimeField,
  EmailField,
  InputNumberField, ObjectFields,
  PhoneField,
  RadioField, SelectField, SwitchBoxField, TextareaField,
  TextField
} from '../modules/form-field/form.field';
import {FormControl} from "@angular/forms";
import {GlassMorphismModule} from "../modules/glass-morphism/glass-morphism.module";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormFieldModule, IonIcon, GlassMorphismModule],
})
export class HomePage {
  data = {
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
  patchValue = {
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
  constructor() {

  }
  submit(data: any) {
    console.log(data);
  }
}
