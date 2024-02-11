import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewImg',
  standalone: true
})
export class ViewImgPipe implements PipeTransform {
  transform(id: string | null, sz: string = 'w1000'): string {
    if(id) {
      return `https://drive.google.com/thumbnail?id=${id}&sz=${sz}`;
    } else {
      return `assets/icon/ion--image-outline.svg`;
    }
  }
}
