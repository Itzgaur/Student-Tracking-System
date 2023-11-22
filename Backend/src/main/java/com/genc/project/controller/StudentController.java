package com.genc.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.genc.project.entities.Course;
import com.genc.project.entities.Student;
import com.genc.project.service.StudentService;


@RestController
@RequestMapping("/student")
@CrossOrigin("http://localhost:3000/")
public class StudentController {
	
	@Autowired
	StudentService service;
	
	@GetMapping
	 public List<Student> getAll(){
		 return service.getAllStudents();
	 }
	
	@PostMapping
	public Student saveStudent(@RequestBody Student student) {
		return service.saveNewStudent(student);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Student> getSingleStudent(@PathVariable(value = "id") int id) {
		return service.getStudentById(id);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> updateStudent(@PathVariable(value="id") int id,@RequestBody Student student){
		return service.updateStudent(id, student);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> removeStudent(@PathVariable int id){
		return service.deleteStudent(id);
	}

}
