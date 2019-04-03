package com.rmbarley.sleepyscrabble.models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ValidateResult {
    private String word;
    private Integer scrabble;
    private Integer scrabbleScore;

    public Integer getScrabbleScore() {
        return scrabbleScore;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public Integer getScrabble() {
        return scrabble;
    }

    public void setScrabble(Integer scrabble) {
        this.scrabble = scrabble;
    }

    public void setScrabbleScore(Integer scrabbleScore) {
        this.scrabbleScore = scrabbleScore;
    }

}