package com.project.N54Application.service;

import com.project.N54Application.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;

public interface IUserService
{
    void addUsers(User user);

    User loadUserByUsername(String username) throws UsernameNotFoundException;

    List<User> getAllUsers();

    User getUserById(String userId);

    void updateUserById(User user);

    void deleteUserById(String id);
}
