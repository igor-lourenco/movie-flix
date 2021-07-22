package com.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movieflix.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
