package app.neotech.gestion.de.caisse.services;

import java.util.List;

import app.neotech.gestion.de.caisse.shared.dto.ClientDto;

public interface ClientService {
	
	ClientDto createClient(ClientDto clientDto);
	ClientDto getClientById(Long id);
	ClientDto updateClient(Long id,ClientDto clientDto);
	void deleteClient(Long id);
	List<ClientDto> getClients(int page, int limit);
}
