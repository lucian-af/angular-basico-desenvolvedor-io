import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public binding = BindingMap;
  public bindingEnum;
  public contadorClique: number = 0;
  public bindingType: string;
  public nome: string = '';
  public alertClass: string = '';

  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";

  adicionarClique(): void {
    this.alertClass = 'alert-warning';
    this.bindingType = this.binding[this.bindingEnum.Event];
    this.contadorClique++;
  }

  zerarContador(): void {
    this.alertClass = 'alert-danger';
    this.bindingType = `${this.binding[this.bindingEnum.Event]} 
      e ${this.binding[this.bindingEnum.Property]}`
    this.contadorClique = 0;
  }

  info(): void {
    this.alertClass = 'alert-primary';
    this.bindingType = this.binding[this.bindingEnum.Property];
  }

  keyUp(event: any): void {
    if (event) {
      this.nome = event.target.value;
    }
    this.bindingType = this.binding[this.bindingEnum.TwoWay];
    this.alertClass = 'alert-success';
  }

  constructor() {
    this.bindingEnum = BindingEnum;
    this.bindingType = '';
  }

}

enum BindingEnum {
  Property,
  Event,
  Interpolation,
  TwoWay
}

const BindingMap = {
  [BindingEnum.Interpolation]: 'Interpolation',
  [BindingEnum.Property]: 'Property Binding',
  [BindingEnum.Event]: 'Event Binding',
  [BindingEnum.TwoWay]: 'Two-Way Binding'
};