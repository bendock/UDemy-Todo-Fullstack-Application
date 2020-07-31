import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from './../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { //this is dependency injection, we are taking the router and injecting it into the login component

  }

  handleLogin() {
    console.log(this.username);

    //if(this.username === "Fullstack" && this.password === "Demo")
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]) //when login is clicked with correct information user is navigated to welcome page
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }


  handleBasicAuthLogin() {
  // console.log(this.username);
  // console.log(this.password);

  //if(this.username === "Fullstack" && this.password === "Demo")

    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false      
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

  handleJWTAuthLogin() {
      this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false      
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )
    }  

  ngOnInit(): void {
  }

}
