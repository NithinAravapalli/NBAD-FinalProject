package com.project.N54Application.service.impl;

import com.project.N54Application.model.User;
import com.project.N54Application.repository.IUserRepository;
import com.project.N54Application.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService
{
    private final IUserRepository repository;

    @Autowired
    public UserService(IUserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void addUsers(User user) {
        repository.save(user);
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserById(String userId) {
        return repository.findById(userId).get();
    }

    @Override
    public void updateUserById(User user) {
        repository.save(user);
    }

    @Override
    public void deleteUserById(String id) {
        repository.deleteById(id);
    }
}
