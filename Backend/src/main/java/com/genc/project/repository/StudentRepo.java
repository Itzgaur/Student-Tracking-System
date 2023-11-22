package com.genc.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.genc.project.entities.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {

}
