package com.project.N54Application.service;

public interface ITokenBlacklistService {
    void blacklistToken(String token);

    boolean isTokenBlacklisted(String token);

    void clearBlacklist();
}
