package com.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movieflix.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{

}
