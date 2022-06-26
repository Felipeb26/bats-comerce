import { Router } from '@angular/router';
import { AccountService } from './../../../account/shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.scss']
})
export class CreateLoginComponent implements OnInit {

  login ={
    email: '',
    senha: ''
  }

  constructor(
    private accService:AccountService,
    private route:Router) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try {
      const result = await this.accService.login(this.login);
      console.log(`login efetuado: ${result}`)
      this.route.navigate([""])
    } catch (error) {
      console.log(error);
    }
  }

}
