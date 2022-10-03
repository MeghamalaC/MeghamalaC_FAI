import { Pipe, PipeTransform } from '@angular/core';
import { Fruit } from '../Models/fruit';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(inputData: Fruit[], args: string): Fruit[] {
    if(args == "")
      return inputData;
    else
      return inputData.filter((f)=>f.fruitName.toUpperCase(). includes(args.toUpperCase()));
  }

}
