package com.in28minutes.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins= "http://localhost:4200") //allows only specified URL (our front end) to access spring back end
//First need to tell spring that this is a controller
@RestController
public class HelloWorldController {
	
	//method that returns hello world
	//GET
	//URI - /hello world
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	//hello-world-bean
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("Some Error has Happened"); 
		return new HelloWorldBean ("Hello World - Devin is depressed");
	}
	
	//hello-world/path-parameter/in28minutes
	@GetMapping(path = "/hello-world/path-parameter/{name}") //Given the 'name' path variable any string passed into the URL represents name
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean (String.format("Hello World, %s", name));
	}
	

}
