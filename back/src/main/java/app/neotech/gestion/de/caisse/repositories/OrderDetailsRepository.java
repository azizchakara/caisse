package app.neotech.gestion.de.caisse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.neotech.gestion.de.caisse.entities.OrderDetailsEntity;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetailsEntity, Long> {

	List<OrderDetailsEntity> findDetailsByOrderId(Long id);
}
