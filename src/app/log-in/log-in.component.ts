import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  login: string;
  password: string;
  constructor(private router: Router) { }


  ngOnInit(): void {
  }
  loginFunc(): void {
    const login = document.getElementById('username');
    const password = document.getElementById('password');
    // console.log(username);
    // console.log(password);
    if (this.login === 'admin' && this.password === '123456'){
      this.router.navigateByUrl('/profile');
    }else{
      window.alert(`Login or password is incorrect. Please try again`);
      this.login = '';
      this.password = '';
    }

  }

}
