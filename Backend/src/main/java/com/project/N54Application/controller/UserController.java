package com.project.N54Application.controller;

import com.project.N54Application.model.User;
import com.project.N54Application.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController
{
    @Autowired
    private IUserService service;

    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers()
    {
        Map<String,Object> res = new HashMap<>();
        try
        {
            List<User> users = service.getAllUsers();
            res.put("success",true);
            res.put("users",users);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("err","Failed to fetch the users");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }


}
