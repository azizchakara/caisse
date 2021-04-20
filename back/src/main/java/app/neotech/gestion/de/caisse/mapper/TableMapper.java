package app.neotech.gestion.de.caisse.mapper;

import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;

import app.neotech.gestion.de.caisse.entities.OrderEntity;
import app.neotech.gestion.de.caisse.entities.TableEntity;
import app.neotech.gestion.de.caisse.shared.dto.OrderDto;
import app.neotech.gestion.de.caisse.shared.dto.TableDto;

@Mapper(componentModel = "spring")
public interface TableMapper {

	TableDto entityToModel(TableEntity source);
	TableEntity modelToEntity(TableDto destination);
    @IterableMapping(qualifiedByName = "entityToModel")
    List<TableDto> entitiesToModels(List<TableEntity> tables);
    
}
