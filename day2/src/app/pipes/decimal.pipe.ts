import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name : 'decimalPipe',standalone : true})

export class DecimalPipe implements PipeTransform{
    transform(value: number, ...args: any[]) {
        return value.toFixed(2)
    }
}