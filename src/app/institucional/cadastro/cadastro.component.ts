import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;
  usuarioFake: Usuario = new Usuario();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // 1ª Opção
    // this.cadastroForm = new FormGroup({
    //   nome: new FormControl(''),
    //   cpf: new FormControl(''),
    //   email: new FormControl(''),
    //   senha: new FormControl(''),
    //   senhaConfirmacao: new FormControl('')
    // });

    // 2ª Opção - recomendação Angular
    this.cadastroForm = this.fb.group({
      nome: [''],
      cpf: ['12024454895'],
      email: [''],
      senha: [''],
      senhaConfirmacao: ['']
    });
  }

  onSubmit(): void {
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
    console.log(this.usuario);
  }

  get cpfDigitado() {
    return this.usuarioFake.CPF;
  }

  onFocus($event) {
    if (!$event.target.attributes.hasOwnProperty('readonly')) {
      this.usuarioFake.CPF = this.cadastroForm.value.cpf;
      document.querySelector('#cpfFake').classList.add('d-inline');
      document.querySelector('#cpfFake').classList.remove('d-none');
    }
  }

  onBlur(event) {
    this.usuarioFake.CPF = undefined;
    document.querySelector('#cpfFake').classList.remove('d-inline');
    document.querySelector('#cpfFake').classList.add('d-none');
  }
}
