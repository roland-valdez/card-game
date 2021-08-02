package com.card.game.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Game {
    @GetMapping("/")
    public String landing(){
        return "index";
    }

    @GetMapping("/rules")
    public String rules(){
        return "rules";
    }

    @GetMapping("/about")
    public String about(){
        return "about";
    }

    @GetMapping("/game")
    public String game(){
        return "game";
    }
}
