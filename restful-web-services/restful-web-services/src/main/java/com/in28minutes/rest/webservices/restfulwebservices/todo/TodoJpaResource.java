package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minutes.rest.webservices.restfulwebservices.todo.Todo;

@CrossOrigin(origins= "http://localhost:4200")
@RestController
public class TodoJpaResource {
	
	//@Autowired //auto injects sprig dependencies
	//private TodoHardcodedService todoService;
	
	@Autowired
	private TodoJpaRepository todoJpaRepository;
	
	@GetMapping("/jpa/users/{username}/todos") //allows for mapping GET http requests
	public List<Todo> getAllTodos(@PathVariable String username){ //defines user name as Path Variable
		return todoJpaRepository.findByUsername(username);
		//return todoService.findAll();
	}
	
	@GetMapping("/jpa/users/{username}/todos/{id}") //allows for mapping GET http requests
	public Todo getTodo(@PathVariable String username, @PathVariable long id){ //defines user name as Path Variable
		return todoJpaRepository.findById(id).get();
		//return todoService.findById(id);
	}
	
	//DELETE /users/{username}/todos/{id}
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(
			@PathVariable String username, @PathVariable long id){
		
		//Todo todo = todoService.deleteById(id);
		todoJpaRepository.deleteById(id);
		
		return ResponseEntity.noContent().build(); // if delete is successful found return no content
	}
	
	//UPDATE
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
		
		//Todo todoUpdated = todoService.save(todo);
		Todo todoUpdated = todoJpaRepository.save(todo);
		
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	//POST
	@PostMapping("/jpa/users/{username}/todos") //All above are the standards for creating resources
	public ResponseEntity<Void> createTodo(
			@PathVariable String username, @RequestBody Todo todo){
		
		//Todo createdTodo = todoService.save(todo);
		todo.setUsername(username);
		Todo createdTodo = todoJpaRepository.save(todo);
		
		//location
		//Get current resource URL ==> gets URL id
		// /users/{username}/todos/{id}
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
