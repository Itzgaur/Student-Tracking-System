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
import com.genc.project.service.CourseService;

@RestController
@RequestMapping("/course")
@CrossOrigin("http://localhost:3000/")
public class CourseController {

	@Autowired
	CourseService service;

	@GetMapping
	public List<Course> getAll(){
		return service.getAllCourses();
		
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Course> getSingleCourse(@PathVariable(value = "id") int id) {
		return service.getCourseById(id);
	}
	
	@PostMapping
	public Course saveNewCourse(@RequestBody Course course) {
		return service.sveCourse(course);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> updateCourse(@PathVariable(value="id") int id,@RequestBody Course course){
		return service.updateCourse(id, course);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteCourse(@PathVariable int id){
		return service.deleteCourse(id);
	}
}
