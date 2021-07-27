package com.movieflix.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movieflix.dto.MovieDTO;
import com.movieflix.dto.MovieMinDTO;
import com.movieflix.dto.ReviewMinDTO;
import com.movieflix.services.MovieService;
import com.movieflix.services.ReviewService;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {

	@Autowired
	private MovieService service;
	
	@Autowired
	private ReviewService reviewService;
	
	/*@GetMapping
	public ResponseEntity<Page<MovieDTO>> findAll(Pageable pageable,
			@RequestParam(value = "reviewId",  defaultValue = "0") Long reviewId,
			@RequestParam(value = "name",  defaultValue = "") String name){ 
		Page<MovieDTO> list = service.findAllPaged(reviewId, name.trim(), pageable); //busca todos da lista da tabela ProductDto trazido pela d serviço 
		return ResponseEntity.ok().body(list); //mostra no corpo da  página a lista buscada
	}*/
	
	@GetMapping
	public ResponseEntity<Page<MovieMinDTO>> findGenre(
			@RequestParam(value = "genreId", defaultValue = "0") Long genreId,
		    Pageable pageable) {
		Page<MovieMinDTO> dto = service.findGenre(genreId,pageable);
		return ResponseEntity.ok().body(dto);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<MovieDTO> findById(@PathVariable Long id) {
		MovieDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}	
	
	@GetMapping(value = "{id}/reviews")
    public ResponseEntity<List<ReviewMinDTO>> findReviewsOfMovie(@PathVariable Long id) {
        List<ReviewMinDTO> list = reviewService.findReviewsOfMovie(id);
        return ResponseEntity.ok().body(list);
    }
}