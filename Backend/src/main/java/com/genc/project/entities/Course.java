package com.genc.project.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String courseName;
	private String duration;
	private double fee;
	
	

	public Course(int id, String courseName, String duration, double fee) {
		super();
		this.id = id;
		this.courseName = courseName;
		this.duration = duration;
		this.fee = fee;
	}
	
	public Course() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public double getFee() {
		return fee;
	}

	public void setFee(double fee) {
		this.fee = fee;
	}

}
