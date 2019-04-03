package com.rmbarley.sleepyscrabble.services;

import com.rmbarley.sleepyscrabble.models.ValidateResult;
import com.rmbarley.sleepyscrabble.models.Word;
import com.rmbarley.sleepyscrabble.repositories.WordRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class WordService {
    private WordRepository wordRepository;

    @Autowired
    public WordService (WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    public List<Word> getAllWords() {
        return wordRepository.findAll();
    }

    public Optional<Word> getWordById(Long id) {
        return wordRepository.findById(id);
    }

    public Word createWord(Word word) {
        return wordRepository.save(word);
     }

    public boolean validateWord(String word) {
        final String apiKey = "6.158751840006691e29";
        final String url = "http://www.wordgamedictionary.com/api/v1/references/scrabble/{searchWord}?key={apiKey}";
        RestTemplate restTemplate = new RestTemplate();
        ValidateResult result = restTemplate.getForObject(url, ValidateResult.class, word, apiKey);
        // Probably should have a try/catch here
        return result.getScrabble() == 1;
    }
}