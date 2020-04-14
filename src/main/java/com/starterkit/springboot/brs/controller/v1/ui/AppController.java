package com.starterkit.springboot.brs.controller.v1.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
// @RequestMapping(value = {"/app"})
public class AppController {
    
    @GetMapping(value = "/app")
    public String app() {
        return "app";
    }

    @GetMapping(value = "/app/signup")
    public String signup() {
        return "app";
    }

    @GetMapping(value = "/app/login")
    public String login() {
        return "app";
    }

    @GetMapping(value = "/app/booking")
    public String booking() {
        return "app";
    }

    @GetMapping(value = "/app/schedule")
    public String schedule() {
        return "app";
    }
}