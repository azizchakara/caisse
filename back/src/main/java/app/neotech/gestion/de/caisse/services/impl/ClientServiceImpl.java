package app.neotech.gestion.de.caisse.services.impl;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import app.neotech.gestion.de.caisse.entities.ClientEntity;
import app.neotech.gestion.de.caisse.repositories.ClientRepository;
import app.neotech.gestion.de.caisse.services.ClientService;
import app.neotech.gestion.de.caisse.shared.dto.ClientDto;

@Service
public class ClientServiceImpl implements ClientService {

	@Autowired
	ClientRepository clientRepository;
	
	@Override
	public ClientDto createClient(ClientDto client) {
		
		ClientEntity clientEntity = new ClientEntity();
		BeanUtils.copyProperties(client, clientEntity);
		ClientEntity newClient = clientRepository.save(clientEntity);
		ClientDto clientDto = new ClientDto();
		BeanUtils.copyProperties(newClient, clientDto);
		return clientDto;
	}



	@Override
	public ClientDto getClientById(Long id) {
		
		ClientEntity clientEntity = clientRepository.findClientById(id);
		if(clientEntity == null) throw null;
		ClientDto clientDto = new ClientDto();
		BeanUtils.copyProperties(clientEntity, clientDto);
		return clientDto;
	
	}



	@Override
	public ClientDto updateClient(Long id, ClientDto clientDto) {
		
		ClientEntity clientEntity = clientRepository.findClientById(id);
		if(clientEntity == null) throw null;
		clientEntity.setAdresse(clientDto.getAdresse());
		clientEntity.setYear(clientDto.getYear());
		clientEntity.setCodeClient(clientDto.getCodeClient());
		clientEntity.setEmail(clientDto.getEmail());
		clientEntity.setFirstName(clientDto.getFirstName());
		clientEntity.setLastName(clientDto.getLastName());
		clientEntity.setPhone(clientDto.getPhone());
		ClientEntity clientUpdated = clientRepository.save(clientEntity);
		ClientDto client = new ClientDto();
		BeanUtils.copyProperties(clientUpdated, client);
		return client;
		
	}



	@Override
	public void deleteClient(Long id) {
		
		ClientEntity clientEntity = clientRepository.findClientById(id);
		if(clientEntity==null) throw null;
		clientRepository.delete(clientEntity);
		
	}



	@Override
	public List<ClientDto> getClients(int page, int limit) {
		if(page > 0) page -=1;
		List<ClientDto> clientsDto = new ArrayList<>();
		Pageable pageableRequest = PageRequest.of(page, limit);
		Page<ClientEntity> clientPage = clientRepository.findAll(pageableRequest);
		List<ClientEntity> clients = clientPage.getContent();
		for(ClientEntity clientEntity:clients) {
			ClientDto client = new ClientDto();
			BeanUtils.copyProperties(clientEntity, client);
			clientsDto.add(client);
		}
		return clientsDto;
	}

	

}
