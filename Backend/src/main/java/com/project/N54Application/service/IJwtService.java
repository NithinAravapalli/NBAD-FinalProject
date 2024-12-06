package com.project.N54Application.service;

import org.springframework.security.core.userdetails.UserDetails;

public interface IJwtService
{
    String extractUserName(String token);

    String generateToken(String username);

    boolean isTokenValid(String token, UserDetails userDetails);
}
