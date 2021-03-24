package app.neotech.gestion.de.caisse.mapper;

import java.util.List;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import app.neotech.gestion.de.caisse.entities.ProductEntity;
import app.neotech.gestion.de.caisse.shared.dto.ProductDto;


@Mapper(componentModel = "spring", uses = { CategoryMapper.class, IngredientMapper.class})
public interface ProductMapper {


	ProductDto entityToModel(ProductEntity source);

	ProductEntity modelToEntity(ProductDto destination);

    @IterableMapping(qualifiedByName = "entityToModel")
    List<ProductDto> entitiesToModels(List<ProductEntity> products);
}
