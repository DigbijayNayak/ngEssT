import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList',
  // pure: true,
})
export class categoryListPipe implements PipeTransform {
  transform(mediaItems: any) {
    const categories: any = [];
    mediaItems.forEach((mediaItem: any) => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}
