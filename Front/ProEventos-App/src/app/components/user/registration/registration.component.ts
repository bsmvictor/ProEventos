import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validator, Validators, AbstractControlOptions } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatorField } from '../../../helpers/ValidatorField';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  form!: FormGroup;

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {

    this.form = new FormGroup({
      primeiroNome: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      ultimoNome: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      usuario: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      termos: new FormControl('', Validators.requiredTrue),
    }, ValidatorField.MustMatch('senha', 'confirmarSenha'));
  }
}

