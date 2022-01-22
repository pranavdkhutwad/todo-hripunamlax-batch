import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyHeros'
})
export class FlyHerosPipe implements PipeTransform {

  transform(arr: any) {
    return arr.filter((obj: any) => obj.canFly);
  }

}
