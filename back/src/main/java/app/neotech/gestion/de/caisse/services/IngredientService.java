package app.neotech.gestion.de.caisse.services;

import java.util.List;

import app.neotech.gestion.de.caisse.shared.dto.IngredientDto;

public interface IngredientService {

	IngredientDto createIngredient (IngredientDto ingredientDto);
	IngredientDto getIngredientByIngredientId(Long id);
	IngredientDto updateIngredient(Long id, IngredientDto ingredientDto);
	void deleteIngredient(Long id);
	List<IngredientDto> getIngredients(int page, int limit);
}
