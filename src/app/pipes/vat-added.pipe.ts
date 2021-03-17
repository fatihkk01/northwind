import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  //VAT = Katma Değer Vergisi
  //Pipe = Elimizdeki veriyi görsel olarak daha farklı şekilde göstermemizi sağlar. 
  //Not = Pipe uygulamak için | işareti koymamız gerekir

  transform(value: number, rate:number): number {
    return value + (value*rate/100);
  }

}
