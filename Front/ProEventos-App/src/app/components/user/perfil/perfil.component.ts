import { Component, OnInit } from '@angular/core';
import { TituloComponent } from '../../../shared/titulo/titulo.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorField } from '../../../helpers/ValidatorField';


@Component({
  selector: 'app-perfil',
  standalone : true,
  imports: [TituloComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {

    this.form = new FormGroup({
      primeiroNome: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      ultimoNome: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
    }, ValidatorField.MustMatch('senha', 'confirmarSenha'));
  }

}
