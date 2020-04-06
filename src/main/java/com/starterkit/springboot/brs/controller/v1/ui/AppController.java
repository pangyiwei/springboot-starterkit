package com.starterkit.springboot.brs.controller.v1.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = {"/app"})
public class AppController {
    
    @GetMapping(value = "/")
    public String app() {
        return "app";
    }

    @GetMapping(value = "/signup")
    public String signup() {
        return "app";
    }

    @GetMapping(value = "/login")
    public String login() {
        return "app";
    }

    @GetMapping(value = "/booking")
    public String booking() {
        return "app";
    }

    @GetMapping(value = "/schedule")
    public String schedule() {
        return "app";
    }
}