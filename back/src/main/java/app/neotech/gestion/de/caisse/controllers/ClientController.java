package app.neotech.gestion.de.caisse.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import app.neotech.gestion.de.caisse.exceptions.ClientException;
import app.neotech.gestion.de.caisse.exceptions.ErrorMessages;
import app.neotech.gestion.de.caisse.responses.ClientResponse;
import app.neotech.gestion.de.caisse.services.ClientService;
import app.neotech.gestion.de.caisse.shared.dto.ClientDto;

@RestController
@RequestMapping("/clients")
@CrossOrigin
public class ClientController {

	@Autowired
	ClientService clientService;

	@GetMapping(path = "/{id}")

	public ResponseEntity<ClientDto> getClient(@PathVariable Long id) {
		
		ClientDto clientDto = clientService.getClientById(id);
		return new ResponseEntity<ClientDto>(clientDto,HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<ClientDto> createClient(@RequestBody ClientDto clientDto) throws Exception {
		if(clientDto.getFirstName().isEmpty() || clientDto.getLastName().isEmpty() || clientDto.getAdresse().isEmpty() || clientDto.getCodeClient().isEmpty() || clientDto.getEmail().isEmpty())
			throw new ClientException(ErrorMessages.MISSING_REQUIRED_FIELD.getErrorMessage());
		ClientDto createClient = clientService.createClient(clientDto);
		return new ResponseEntity<ClientDto>(createClient,HttpStatus.ACCEPTED);
	}

	@PutMapping(path = "/{id}")
	public ResponseEntity<ClientDto> updateClient(@PathVariable Long id, @RequestBody ClientDto clientDto) {
		if(clientDto.getFirstName().isEmpty() || clientDto.getLastName().isEmpty() || clientDto.getAdresse().isEmpty() || clientDto.getCodeClient().isEmpty() || clientDto.getEmail().isEmpty())
			throw new ClientException(ErrorMessages.MISSING_REQUIRED_FIELD.getErrorMessage());
		ClientDto updateClient = clientService.updateClient(id, clientDto);
		return new ResponseEntity<ClientDto>(updateClient,HttpStatus.OK);
	}
	@GetMapping(path="/all")
	public List<ClientResponse> getAllClients(@RequestParam(value="page",defaultValue="1") int page,@RequestParam(value="limit", defaultValue="15") int limit){
			List<ClientResponse> clientResponse = new ArrayList<>();
			List<ClientDto> clients = clientService.getClients(page,limit);
			for(ClientDto clientDto:clients) {
				ClientResponse client = new ClientResponse();
				BeanUtils.copyProperties(clientDto, client);
				clientResponse.add(client);
			}
			return clientResponse;
	}

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<Object> deleteClient(@PathVariable Long id) {
		clientService.deleteClient(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}


}
