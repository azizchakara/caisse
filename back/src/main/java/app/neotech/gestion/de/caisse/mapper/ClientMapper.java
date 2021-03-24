package app.neotech.gestion.de.caisse.mapper;

import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;

import app.neotech.gestion.de.caisse.entities.ClientEntity;
import app.neotech.gestion.de.caisse.shared.dto.ClientDto;

@Mapper(componentModel = "spring")
public interface ClientMapper {
	
	ClientDto entityToModel(ClientEntity source);

	ClientEntity modelToEntity(ClientDto destination);

    @IterableMapping(qualifiedByName = "entityToModel")
    List<ClientDto> entitiesToModels(List<ClientEntity> clients);

}
