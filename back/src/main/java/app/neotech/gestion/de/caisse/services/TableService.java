package app.neotech.gestion.de.caisse.services;


import java.util.List;

import app.neotech.gestion.de.caisse.shared.dto.IngredientDto;
import app.neotech.gestion.de.caisse.shared.dto.TableDto;

public interface TableService {

	TableDto createTable(TableDto tablesDto);
	TableDto getTableById(Long id);
	List<TableDto> getTables(int page, int limit);
	TableDto updateTable(Long id, TableDto tableDto);
}
