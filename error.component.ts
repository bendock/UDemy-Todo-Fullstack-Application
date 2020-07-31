import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'An error has occured! Please contact customer support at ***-***.'
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
