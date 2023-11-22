package com.genc.project.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.genc.project.entities.Course;
import com.genc.project.entities.Student;
import com.genc.project.exception.ResourceNotFoundException;
import com.genc.project.repository.StudentRepo;

@Service
public class StudentService {

	@Autowired
	StudentRepo repo;

	public List<Student> getAllStudents() {
		return repo.findAll();
	}

	public Student saveNewStudent(Student student) {
		return repo.save(student);
	}

	public ResponseEntity<Student> getStudentById(int id) {
		Student student = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("No data for id " + id));

		return ResponseEntity.ok(student);
	}

	public ResponseEntity<?> updateStudent(int id, Student student) {
		Student updated = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("no Course with ID " + id));
		updated.setFirstName(student.getFirstName());
		updated.setLastName(student.getLastName());
		updated.setCourse_assigned(student.getCourse_assigned());

		repo.save(updated);
		return ResponseEntity.ok(updated);
	}

	public ResponseEntity<?> deleteStudent(int id) {
		Student student = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("No course with id " + id));

		repo.delete(student);
		Map<String, Boolean> res = new HashMap<>();
		res.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(res);
	}

}
