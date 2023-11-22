package com.genc.project.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstName;
	private String lastName;
	
	private String course_assigned;

	public Student(int id, String firstName, String lastName,  String course_assigned) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		
		this.course_assigned = course_assigned;
	}

	public Student() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getCourse_assigned() {
		return course_assigned;
	}

	public void setCourse_assigned(String course_assigned) {
		this.course_assigned = course_assigned;
	}

	

}
