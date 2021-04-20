package app.neotech.gestion.de.caisse.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import app.neotech.gestion.de.caisse.entities.TableEntity;
import app.neotech.gestion.de.caisse.mapper.TableMapper;
import app.neotech.gestion.de.caisse.repositories.TableRepository;
import app.neotech.gestion.de.caisse.services.TableService;
import app.neotech.gestion.de.caisse.shared.dto.TableDto;

@Service
public class TablesServiceImpl implements TableService {

	@Autowired
	TableRepository tableRepository;
	
	@Autowired
	TableMapper tableMapper;
	
	@Override
	public TableDto createTable(TableDto table) {
		/*TableEntity tableEntity = new TableEntity();
		BeanUtils.copyProperties(table, tableEntity);
		TableEntity newTable = tableRepository.save(tableEntity);
		TablesDto tablesDto = new TablesDto();
		BeanUtils.copyProperties(newTable, tablesDto);
		return tablesDto;*/
		TableEntity tableEntity = tableMapper.modelToEntity(table);
		TableEntity newTable = tableRepository.save(tableEntity);
		//return productMapper.entityToModel(newProduct);
		return tableMapper.entityToModel(newTable);
	}

	@Override
	public TableDto getTableById(Long id) {
		TableEntity tableEntity = tableRepository.findTableById(id);
		if(tableEntity == null) throw null;
		TableDto tableDto = new TableDto();
		BeanUtils.copyProperties(tableEntity, tableDto);
		return tableDto;
	}

	@Override
	public List<TableDto> getTables(int page, int limit) {
		if(page > 0) page -=1;
		List<TableDto> tablesDto = new ArrayList<>();
		Pageable pageableRequest = PageRequest.of(page, limit);
		Page<TableEntity> tablePage = tableRepository.findAll(pageableRequest);
		List<TableEntity> tables =  tablePage.getContent();
		for(TableEntity tableEntity:tables) {
			TableDto table = new TableDto();
			BeanUtils.copyProperties(tableEntity, table);
			tablesDto.add(table);
		}
		return tablesDto;
	}

	@Override
	public TableDto updateTable(Long id, TableDto tableDto) {
		TableEntity tableEntity = tableRepository.findTableById(id);
		if(tableEntity == null) throw null;
		tableEntity.setTablenum(tableDto.getTablenum());
		tableEntity.setTableplace(tableDto.getTableplace());
		TableEntity tableUpdated = tableRepository.save(tableEntity);
		TableDto table = new TableDto();
		BeanUtils.copyProperties(tableUpdated, table);
		return table;
	}

}
