package com.project.N54Application.controller;

import com.project.N54Application.model.User;
import com.project.N54Application.service.IJwtService;
import com.project.N54Application.service.ITokenBlacklistService;
import com.project.N54Application.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/n54/auth")
public class AuthenticationController {
    private final IUserService service;
    private final IJwtService jwtService;
    private final ITokenBlacklistService tokenBlacklistService;

    private final String DEFAULT_USERNAME = "nithin";
    private final String DEFAULT_PASSWORD = "nithin";

    public AuthenticationController(IUserService service, IJwtService jwtService, ITokenBlacklistService tokenBlacklistService) {
        this.service = service;
        this.jwtService = jwtService;
        this.tokenBlacklistService = tokenBlacklistService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        HashMap<String, Object> res = new HashMap<>();
        try {
            String username = body.get("username");
            String password = body.get("password");

            // Check if both username and password are provided
            if (username == null || password == null || username.isEmpty() || password.isEmpty()) {
                res.put("success", false);
                res.put("err", "Please fill the required fields");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
            }

            // Validate username and password
            if (username.equals(DEFAULT_USERNAME) && password.equals(DEFAULT_PASSWORD)) {
                String token = jwtService.generateToken(username);

                res.put("success", true);
                res.put("token", token);
                res.put("msg", "User login successful");
                return ResponseEntity.status(HttpStatus.OK).body(res);
            } else {
                // Invalid username or password
                res.put("success", false);
                res.put("err", "Invalid username or password");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(res);
            }
        } catch (Exception e) {
            // Handle any unexpected errors
            res.put("success", false);
            res.put("err", "An unexpected error occurred");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @PostMapping("/user/login")
    public ResponseEntity<?> userLogin(@RequestBody Map<String, String> login) {
        HashMap<String, Object> res = new HashMap<>();
        try {
            String username = login.get("username");
            String password = login.get("password");

            // Check if both username and password are provided
            if (username == null || password == null || username.isEmpty() || password.isEmpty()) {
                res.put("success", false);
                res.put("err", "Please fill the required fields");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
            }

            // Validate user credentials
            User user = service.loadUserByUsername(username);
            if (user != null && password.matches(user.getPassword())) {
                String token = jwtService.generateToken(username);

                res.put("success", true);
                res.put("token", token);
                res.put("msg", "User  login successful");
                return ResponseEntity.status(HttpStatus.OK).body(res);
            } else {
                res.put("success", false);
                res.put("err", "Invalid username or password");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(res);
            }
        } catch (Exception e) {
            res.put("success", false);
            res.put("err", "An unexpected error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestHeader("Authorization") String token) {
        HashMap<String, Object> res = new HashMap<>();
        try {
            if (token == null || !token.startsWith("Bearer ")) {
                res.put("success", false);
                res.put("err", "Token is missing or malformed");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
            }
            String jwtToken = token.replace("Bearer ", "");
            tokenBlacklistService.blacklistToken(jwtToken);
            res.put("success", true);
            res.put("msg", "Logged out successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        } catch (Exception e) {
            res.put("success", false);
            res.put("err", "An error occurred during logout");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @PostMapping("/registration")
    public ResponseEntity<?> userRegistration(@RequestBody User user) {
        Map<String, Object> res = new HashMap<>();
        try {
            service.addUsers(user);
            res.put("success", true);
            res.put("msg", "User Added Successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        } catch (Exception e) {
            res.put("success", false);
            res.put("err", "Failed to add the users");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }
}
