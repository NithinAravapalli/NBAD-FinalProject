package com.project.N54Application.repository;

import com.project.N54Application.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends MongoRepository<User,String>
{
    User findByUsername(String username);
}
