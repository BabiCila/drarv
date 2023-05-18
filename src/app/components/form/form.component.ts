import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  constructor(private router: Router){ }

  ngOnInit(): void {
  }

  enviar(form : NgForm) {
    if(form.valid){
      alert('A Dra Rafaela Vasconcelos agradece o seu contato');
    }else {
      alert('Formulário Inválido');
    }
  }
}
