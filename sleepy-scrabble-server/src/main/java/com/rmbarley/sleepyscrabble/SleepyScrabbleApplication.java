package com.rmbarley.sleepyscrabble;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class SleepyScrabbleApplication {

	public static void main(String[] args) {
		SpringApplication.run(SleepyScrabbleApplication.class, args);
	}

}
