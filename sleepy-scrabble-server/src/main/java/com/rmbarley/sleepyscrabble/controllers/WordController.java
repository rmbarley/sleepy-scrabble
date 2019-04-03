package com.rmbarley.sleepyscrabble.controllers;

import java.util.List;
import java.util.Optional;

import com.rmbarley.sleepyscrabble.models.Word;
import com.rmbarley.sleepyscrabble.services.WordService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class WordController {
    private WordService wordService;

    @Autowired
    public WordController(WordService wordService) {
        this.wordService = wordService;
    }

    // Get All Words
    @GetMapping("/words")
    public List<Word> findAll() {
        return wordService.getAllWords();
    }

    // Get Word By Id
    @GetMapping("/words/{id}")
    public Optional<Word> findById(@PathVariable long id) {
        return wordService.getWordById(id);
    }

    // Save New Word
    @PostMapping("/words")
    public Word create(@RequestBody Word word) {
        return wordService.createWord(word);
    }

    @PostMapping("/words/validate")
    public boolean validateProject(@RequestBody String word) {
        return wordService.validateWord(word);
    }
}
