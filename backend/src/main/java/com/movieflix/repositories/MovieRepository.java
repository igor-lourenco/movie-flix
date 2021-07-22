package com.movieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.movieflix.dto.MovieMinDTO;
import com.movieflix.entities.Genre;
import com.movieflix.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
	
	@Query("SELECT new com.movieflix.dto.MovieMinDTO(obj.id,obj.title,obj.subTitle,obj.year,obj.imgUrl) FROM Movie obj WHERE (:genre IS NULL OR :genre = obj.genre) ORDER BY obj.title")
	Page<MovieMinDTO> findGenre(Genre genre, Pageable pageable);	
}