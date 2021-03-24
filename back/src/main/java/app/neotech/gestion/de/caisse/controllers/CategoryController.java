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
import app.neotech.gestion.de.caisse.exceptions.NullException;
import app.neotech.gestion.de.caisse.exceptions.RessourceNotFoundException;
import app.neotech.gestion.de.caisse.responses.CategoryResponse;
import app.neotech.gestion.de.caisse.services.CategoryService;
import app.neotech.gestion.de.caisse.shared.dto.CategoryDto;

@RestController
@RequestMapping("/categories")
@CrossOrigin
public class CategoryController {
	
	@Autowired
	CategoryService categoryService;
	
	@PostMapping
	public ResponseEntity<CategoryDto> createCategory(@RequestBody CategoryDto categoryDto) throws Exception {
		if(categoryDto.getCategoryName().isEmpty() || categoryDto.getLogo().isEmpty())
		throw new CategoryException(ErrorMessages.MISSING_REQUIRED_FIELD.getErrorMessage());
		CategoryDto createCategory = categoryService.createCategory(categoryDto);
		return new ResponseEntity<CategoryDto>(createCategory,HttpStatus.CREATED);
	}

	@DeleteMapping(path="/{id}")
	public ResponseEntity<Object> deleteCategory(@PathVariable Long id) throws NullException{
		categoryService.deleteCategory(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<CategoryDto> getCategory(@PathVariable Long id) throws NullException,RessourceNotFoundException{
		CategoryDto categoryDto = categoryService.getCategoryById(id);
		return new ResponseEntity<CategoryDto>(categoryDto,HttpStatus.OK);
	}
	@GetMapping(path="/all")
	public List<CategoryResponse> getAllCategories(@RequestParam(value="page",defaultValue="1") int page,@RequestParam(value="limit", defaultValue="15") int limit){
			List<CategoryResponse> categoryResponse = new ArrayList<>();
			List<CategoryDto> categories = categoryService.getCategories(page,limit);
			for(CategoryDto categoryDto:categories) {
				CategoryResponse category = new CategoryResponse();
				BeanUtils.copyProperties(categoryDto, category);
				categoryResponse.add(category);
			}
			return categoryResponse;
	}
	
	@PutMapping(path="/{id}")
	public ResponseEntity<CategoryDto> updateCategory(@PathVariable Long id,@RequestBody CategoryDto categoryDto) throws Exception{
		if(categoryDto.getCategoryName().isEmpty() || categoryDto.getLogo().isEmpty())
			throw new CategoryException(ErrorMessages.MISSING_REQUIRED_FIELD.getErrorMessage());
		CategoryDto updateCategory = categoryService.updateCategory(id,categoryDto);
		return new ResponseEntity<CategoryDto>(updateCategory,HttpStatus.ACCEPTED);
	}


}
