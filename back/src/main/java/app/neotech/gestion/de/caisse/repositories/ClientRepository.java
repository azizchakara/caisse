package app.neotech.gestion.de.caisse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.neotech.gestion.de.caisse.entities.ClientEntity;

@Repository
public interface ClientRepository extends JpaRepository<ClientEntity, Long	> {
	ClientEntity findClientById(Long Id);

}
