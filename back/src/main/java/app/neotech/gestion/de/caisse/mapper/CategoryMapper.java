package app.neotech.gestion.de.caisse.mapper;

import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;

import app.neotech.gestion.de.caisse.entities.CategoryEntity;
import app.neotech.gestion.de.caisse.shared.dto.CategoryDto;


@Mapper(componentModel = "spring")
public interface CategoryMapper {

	CategoryDto entityToModel(CategoryEntity source);
	CategoryEntity modelToEntity(CategoryDto destination);
    @IterableMapping(qualifiedByName = "entityToModel")
    List<CategoryDto> entitiesToModels(List<CategoryEntity> orders);
    
}
