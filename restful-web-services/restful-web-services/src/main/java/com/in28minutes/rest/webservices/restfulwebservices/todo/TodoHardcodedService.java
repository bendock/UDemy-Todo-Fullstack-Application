package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList(); //hard coded placeholder for database
	private static long idCounter = 0;
	

	static {
		todos.add(new Todo(++idCounter,"in28Minutes", "Learn to Code", new Date(), false));
		todos.add(new Todo(++idCounter,"in28Minutes", "Learn to Dance", new Date(), false));
		todos.add(new Todo(++idCounter,"in28Minutes", "Go shopping", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		
		if(todo == null) return null; //if no todo found return null
		
		if(todos.remove(todo)) { //if todo is found, remove todo from list, return todo
			return todo;
		}
		
		return null; //else return null
	}

	public Todo findById(long id) {
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		
		return null;
	}
}


