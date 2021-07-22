package com.movieflix.services;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.movieflix.dto.MovieDTO;
import com.movieflix.dto.MovieMinDTO;
import com.movieflix.entities.Genre;
import com.movieflix.entities.Movie;
import com.movieflix.repositories.GenreRepository;
import com.movieflix.repositories.MovieRepository;
import com.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository movieRepository;
	@Autowired
	private GenreRepository genreRepository;
	
	@Transactional
	public MovieDTO findById(Long id) {
		Optional<Movie> movie = movieRepository.findById(id);
		MovieDTO movieDTO = new MovieDTO(movie.orElseThrow(() -> new ResourceNotFoundException("Movie not found")));
		movieDTO.setGenre(genreRepository.getOne(movieDTO.getGenreId()));
		return movieDTO;
	}

	@Transactional
	public Page<MovieMinDTO> findGenre(Long genreId, Pageable pageable) {
	 	Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
	 	Page<MovieMinDTO> list = movieRepository.findGenre(genre, pageable);
	 	return list;
	}
}