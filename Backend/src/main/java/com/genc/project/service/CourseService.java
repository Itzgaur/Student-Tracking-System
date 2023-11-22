package com.genc.project.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.genc.project.entities.Course;
import com.genc.project.exception.ResourceNotFoundException;
import com.genc.project.repository.CourseRepo;

@Service
public class CourseService {

	@Autowired
	CourseRepo repo;

	public List<Course> getAllCourses() {
		return repo.findAll();
	}

	public Course sveCourse(Course course) {
		return repo.save(course);
	}

	public ResponseEntity<Course> getCourseById(int id) {
		Course course = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("No data for id " + id));

		return ResponseEntity.ok(course);
	}

	public ResponseEntity<?> updateCourse(int id , Course course){
		Course updated = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("no Course with ID " + id));
		updated.setCourseName(course.getCourseName());
		updated.setDuration(course.getDuration());
		updated.setFee(course.getFee());
		
		repo.save(updated);
		return ResponseEntity.ok(updated);
	}
	
	public ResponseEntity<?> deleteCourse( int id) {
		Course course = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("No course with id "+id));
		
		repo.delete(course);
		Map<String,Boolean> res = new HashMap<>();
		res.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(res);
		
	}
}
