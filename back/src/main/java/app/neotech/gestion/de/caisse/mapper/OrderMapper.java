package app.neotech.gestion.de.caisse.mapper;

import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;

import app.neotech.gestion.de.caisse.entities.OrderEntity;
import app.neotech.gestion.de.caisse.shared.dto.OrderDto;

@Mapper(componentModel = "spring", uses = { ClientMapper.class, BillMapper.class, ProductMapper.class})
public interface OrderMapper {

	OrderDto entityToModel(OrderEntity source);
	OrderEntity modelToEntity(OrderDto destination);
    @IterableMapping(qualifiedByName = "entityToModel")
    List<OrderDto> entitiesToModels(List<OrderEntity> orders);

}