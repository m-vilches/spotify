import { TrackModel } from './../../core/models/tracks.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args:string | null = null, sort:string | null = null): TrackModel[] {
   try{
      if(args === null){
        return value
      }else{
        const tmplist= value.sort(function (a, b) {
          if (a[args] > b[args]) {
            return 1;
          }
          if (a[args] < b[args]) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        return (sort === 'asc') ? tmplist: tmplist.reverse()
      }

   } catch(e)  {
    console.log('Ha ocurrido un error en el ordenador');
    return value
   }

  }
}
