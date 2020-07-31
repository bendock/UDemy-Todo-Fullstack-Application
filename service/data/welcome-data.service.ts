import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message: string){  //defining structure of the response we are expecting

  }
}


@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http: HttpClient //injecting HTTP client from Angular - Make sure that this is imported within APP module
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean") //when using <> similar to generics in JAVA - expecting this kind of response back
    //console.log("Execute Hello World Bean Service")
  }


  ////hello-world/path-parameter/in28minutes
  executeHelloWorldBeanServiceWithPathVariable(name){ //${name} + `` allows for the variable to be passed into the string below
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({ //creating instance of the header and passing string in 
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-parameter/${name}`,); 
    // {headers}) 
    
    //when using <> similar to generics in JAVA - expecting this kind of response back
    //console.log("Execute Hello World Bean Service")
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'user'
  //   let password = 'password'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  //   return basicAuthHeaderString;
  // }
}
