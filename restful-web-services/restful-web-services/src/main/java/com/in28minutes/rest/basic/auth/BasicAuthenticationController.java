package com.in28minutes.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins= "http://localhost:4200") //allows only specified URL (our front end) to access spring back end
//First need to tell spring that this is a controller
@RestController
public class BasicAuthenticationController {
	
	//hello-world-bean
	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		//throw new RuntimeException("Some Error has Happened"); 
		return new AuthenticationBean ("You are authenticated");
	}

}
