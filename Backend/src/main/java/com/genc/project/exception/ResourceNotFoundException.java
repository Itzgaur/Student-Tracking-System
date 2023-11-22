package com.genc.project.exception;

import org.apache.logging.log4j.message.Message;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
	
	public ResourceNotFoundException(String msg) {
		super(msg);
	}

}
