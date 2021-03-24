package app.neotech.gestion.de.caisse.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import app.neotech.gestion.de.caisse.entities.IngredientEntity;
import app.neotech.gestion.de.caisse.repositories.IngredientRepository;
import app.neotech.gestion.de.caisse.services.IngredientService;
import app.neotech.gestion.de.caisse.shared.dto.IngredientDto;


@Service
public class IngredientServiceImpl implements IngredientService {

	@Autowired
	IngredientRepository ingredientRepository;
	
	@Override
	public IngredientDto createIngredient(IngredientDto ingredient) {
		IngredientEntity ingredientEntity = new IngredientEntity();
		BeanUtils.copyProperties(ingredient, ingredientEntity);
		IngredientEntity newIngredient = ingredientRepository.save(ingredientEntity);
		IngredientDto ingredientDto = new IngredientDto();
		BeanUtils.copyProperties(newIngredient, ingredientDto);
		return ingredientDto;
	}

	@Override
	public IngredientDto getIngredientByIngredientId(Long id) {
		IngredientEntity ingredientEntity = ingredientRepository.findIngredientById(id);
		if(ingredientEntity == null) throw null;
		IngredientDto ingredientDto = new IngredientDto();
		BeanUtils.copyProperties(ingredientEntity, ingredientDto);
		return ingredientDto;
	}

	@Override
	public IngredientDto updateIngredient(Long id, IngredientDto ingredientDto) {
		IngredientEntity ingredientEntity = ingredientRepository.findIngredientById(id);
		if(ingredientEntity == null) throw null;
		ingredientEntity.setName(ingredientDto.getName());
		ingredientEntity.setPrice(ingredientDto.getPrice());
		ingredientEntity.setQuantity(ingredientDto.getQuantity());
		ingredientEntity.setStock(ingredientDto.getStock());
		IngredientEntity ingredientUpdated = ingredientRepository.save(ingredientEntity);
		IngredientDto ingredient = new IngredientDto();
		BeanUtils.copyProperties(ingredientUpdated, ingredient);
		
		return ingredient;
	}

	@Override
	public void deleteIngredient(Long id) {
		IngredientEntity ingredientEntity = ingredientRepository.findIngredientById(id);
		if(ingredientEntity == null) throw null;
		ingredientRepository.delete(ingredientEntity);
	}

	@Override
	public List<IngredientDto> getIngredients(int page, int limit) {
		if(page > 0) page -=1;
		List<IngredientDto> ingredientsDto = new ArrayList<>();
		Pageable pageableRequest = PageRequest.of(page, limit);
		Page<IngredientEntity> ingredientPage = ingredientRepository.findAll(pageableRequest);
		List<IngredientEntity> ingredients = ingredientPage.getContent();
		for(IngredientEntity ingredientEntity:ingredients) {
			IngredientDto ingredient = new IngredientDto();
			BeanUtils.copyProperties(ingredientEntity, ingredient);
			ingredientsDto.add(ingredient);
		}
		return ingredientsDto;
	}

}
