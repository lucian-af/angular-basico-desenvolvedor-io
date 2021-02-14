import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'formatDocument' })
export class FormatDocument implements PipeTransform {
    transform(value: any) {
        if (typeof (value) === 'string') {
            if (value.length === 11) {
                return value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/gm, '$1.$2.$3-$4');
            }
            else if (value.length === 14) {
                return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d)/gm, '$1.$2.$3/$4-$5');
            }
        }
        return value;
    }

}