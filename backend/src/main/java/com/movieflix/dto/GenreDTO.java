package com.movieflix.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.movieflix.entities.Genre;
import com.movieflix.entities.Movie;

public class GenreDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	@JsonIgnore
	private Set<MovieDTO> movies = new HashSet<>();
	
	public GenreDTO() {
	}

	public GenreDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public GenreDTO(Genre entity) {
		id = entity.getId();
		name = entity.getName();
	}

	public GenreDTO(Genre entity, Set<Movie> movies) {
		this(entity);
		movies.forEach(mov -> this.movies.add(new MovieDTO(mov)));
	}	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<MovieDTO> getMovies() {
		return movies;
	}

	public void setMovies(Set<MovieDTO> movies) {
		this.movies = movies;
	}
}
