package app.neotech.gestion.de.caisse.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import app.neotech.gestion.de.caisse.responses.IngredientResponse;
import app.neotech.gestion.de.caisse.responses.TableResponse;
import app.neotech.gestion.de.caisse.services.TableService;
import app.neotech.gestion.de.caisse.shared.dto.IngredientDto;
import app.neotech.gestion.de.caisse.shared.dto.TableDto;

@RestController
@RequestMapping("/tables")
@CrossOrigin
public class TableController {
	
	
	@Autowired
	TableService tableService;
	
	@PostMapping
	public ResponseEntity<TableDto> createTable(@RequestBody TableDto tablesDto) {
		TableDto createTable= tableService.createTable(tablesDto);
		return new ResponseEntity<TableDto>(createTable,HttpStatus.CREATED);
	}
	@GetMapping(path="/{id}")
	public ResponseEntity<TableDto> getTable(@PathVariable long id) {
		
		TableDto tableDto = tableService.getTableById(id);
		return new ResponseEntity<TableDto>(tableDto,HttpStatus.OK);
		
	}
	@GetMapping(path="/all")
	public List<TableResponse> getAllTables(@RequestParam(value="page",defaultValue="1") int page,@RequestParam(value="limit", defaultValue="15") int limit){
			List<TableResponse> tableResponse = new ArrayList<>();
			List<TableDto> tables = tableService.getTables(page, limit);
			for(TableDto tableDto:tables) {
				TableResponse table = new TableResponse();
				BeanUtils.copyProperties(tableDto, table);
				tableResponse.add(table);
			}
			return tableResponse;
	}
	@PutMapping(path = "/{id}")
	public ResponseEntity<TableDto> updateTable(@PathVariable Long id,@RequestBody TableDto tableDto) {
		TableDto updateTable = tableService.updateTable(id, tableDto);
		return new ResponseEntity<TableDto>(updateTable,HttpStatus.ACCEPTED);
		
	}
}
