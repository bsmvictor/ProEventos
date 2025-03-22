import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validator, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class EventoDetalheComponent {

  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {
    this.form = new FormGroup({
      tema: new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(50)]),
      local: new FormControl('', Validators.required),
      dataEvento: new FormControl('', Validators.required),
      qtdPessoas: new FormControl(null, [Validators.required, Validators.min(5), Validators.max(500000)]),
      imagemURL: new FormControl('', Validators.required),
      telefone: new FormControl(null, Validators.required,),
      email: new FormControl('', [Validators.required,Validators.email])
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

}
