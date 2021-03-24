package app.neotech.gestion.de.caisse.mapper;

import java.util.List;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import app.neotech.gestion.de.caisse.entities.BillEntity;
import app.neotech.gestion.de.caisse.shared.dto.BillDto;


@Mapper(componentModel = "spring")
public interface BillMapper {

	BillDto entityToModel(BillEntity source);

	BillEntity modelToEntity(BillDto destination);

    @IterableMapping(qualifiedByName = "entityToModel")
    List<BillDto> entitiesToModels(List<BillEntity> bills);
    
}
