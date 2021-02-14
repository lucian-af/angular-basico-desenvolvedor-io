import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'formatCurrency' })
export class FormatCurrency implements PipeTransform {
    transform(value: any) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }
}