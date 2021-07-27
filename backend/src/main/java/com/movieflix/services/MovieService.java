package com.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
	//@Autowired
	//private ReviewRepository reviewRepository;
	
	/*@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Long categoryId,String name, Pageable pageable) {
		List<Review> cats = (categoryId == 0) ? null : Arrays.asList(reviewRepository.getOne(categoryId));
		Page<Movie> list = movieRepository.find(cats,name, pageable); // Busca todos os objetos da lista Product
		movieRepository.findProductsWithGenre(list.getContent());
		return list.map(x -> new MovieDTO(x, x.getReviews())); // Converte os objetos da lista Product para lista ProductDto

	}*/
	
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