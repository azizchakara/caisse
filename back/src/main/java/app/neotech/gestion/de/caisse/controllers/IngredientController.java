package app.neotech.gestion.de.caisse.controllers;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import app.neotech.gestion.de.caisse.exceptions.CategoryException;
import app.neotech.gestion.de.caisse.exceptions.ErrorMessages;
import app.neotech.gestion.de.caisse.responses.IngredientResponse;
import app.neotech.gestion.de.caisse.services.IngredientService;
import app.neotech.gestion.de.caisse.shared.dto.IngredientDto;

@RestController
@RequestMapping("/ingredients")
@CrossOrigin
public class IngredientController {
	
	@Autowired
	IngredientService ingredientService;
	
	@GetMapping(path="/{id}")
	public ResponseEntity<IngredientDto> getIngredient(@PathVariable long id) {
		
		IngredientDto ingredientDto = ingredientService.getIngredientByIngredientId(id);
		return new ResponseEntity<IngredientDto>(ingredientDto,HttpStatus.OK);
		
	}
	
	@PostMapping
	public ResponseEntity<IngredientDto> createIngredient(@RequestBody IngredientDto ingredientDto) {
		if(ingredientDto.getName().isEmpty()) 
		throw new CategoryException(ErrorMessages.MISSING_REQUIRED_FIELD.getErrorMessage());
		IngredientDto createIngredient = ingredientService.createIngredient(ingredientDto);
		return new ResponseEntity<IngredientDto>(createIngredient,HttpStatus.ACCEPTED);
	}
	
	@PutMapping(path = "/{id}")
	public ResponseEntity<IngredientDto> updateIngredient(@PathVariable Long id,@RequestBody IngredientDto ingredientDto) {
		IngredientDto updateIngredient = ingredientService.updateIngredient(id, ingredientDto);
		return new ResponseEntity<IngredientDto>(updateIngredient,HttpStatus.ACCEPTED);
		
	}
	
	@DeleteMapping(path="/{id}")
	public ResponseEntity<Object> deleteIngredient(@PathVariable Long id) {
		ingredientService.deleteIngredient(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping(path="/all")
	public List<IngredientResponse> getAllIngredients(@RequestParam(value="page",defaultValue="1") int page,@RequestParam(value="limit", defaultValue="15") int limit){
			List<IngredientResponse> ingredientResponse = new ArrayList<>();
			List<IngredientDto> ingredients = ingredientService.getIngredients(page,limit);
			for(IngredientDto ingredientDto:ingredients) {
				IngredientResponse ingredient = new IngredientResponse();
				BeanUtils.copyProperties(ingredientDto, ingredient);
				ingredientResponse.add(ingredient);
			}
			return ingredientResponse;
	}


}
