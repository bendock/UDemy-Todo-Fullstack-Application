import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  message = 'Welcome message'
  welcomeMessageFromService: string
  name = ''

  //Activate Route
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { //importing welcomeDataService from welcome data ts

    }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['name'])
    //console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(  //a subsribe is required to execute the service
      response => this.handleSuccessfulResponse(response), error => this.handleErrorResponse(error) //handles any exceptions thrown on backend
         //simply declaring the response, the response is then passed once it comes back
    );

    console.log('last line of welcome message')
    // console.log("get welcome message");
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe( //passing in this.name as the parameter for the method
      response => this.handleSuccessfulResponse(response), error => this.handleErrorResponse(error));
  }

  handleSuccessfulResponse(response){
    //console.log(response);
    //console.log(response.message);

    this.welcomeMessageFromService = response.message
    

  }

  handleErrorResponse(error){
    //console.log(error)
    //console.log(error.error)
    //console.log(error.error.message)

    this.welcomeMessageFromService = error.error.message //need to create sepparate error variable and call in HTML
  }


}
