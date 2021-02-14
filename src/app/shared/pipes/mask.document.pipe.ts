import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'maskDocument' })
export class MaskDocument implements PipeTransform {
    transform(value: any) {
        if (typeof (value) === 'string') {
            value = value.replace(/\W/g, '');
            if (value.length === 11) {
                return value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/g, '$1.###.###-$4');
            }
            else if (value.length === 14) {
                return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d)/g, '$1.###.###/####-$5');
            }
        }
        return value;
    }

}