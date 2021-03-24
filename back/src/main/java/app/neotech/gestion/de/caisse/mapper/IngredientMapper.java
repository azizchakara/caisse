package app.neotech.gestion.de.caisse.mapper;

import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;

import app.neotech.gestion.de.caisse.entities.IngredientEntity;
import app.neotech.gestion.de.caisse.shared.dto.IngredientDto;

@Mapper(componentModel = "spring")
public interface IngredientMapper {

	IngredientDto entityToModel(IngredientEntity source);

	IngredientEntity modelToEntity(IngredientDto destination);

	@IterableMapping(qualifiedByName = "entityToModel")
	List<IngredientDto> entitiesToModels(List<IngredientEntity> ingredients);
}
