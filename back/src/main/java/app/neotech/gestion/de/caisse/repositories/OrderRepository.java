package app.neotech.gestion.de.caisse.repositories;

import java.util.Date;
import java.util.List;
import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import app.neotech.gestion.de.caisse.entities.OrderEntity;


@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {

	OrderEntity findOrderById(Long id);
	List<OrderEntity> findOrderByClientId(Long id);
	List<OrderEntity> findOrderBycmdDate(Date dateCmd);
	Set<OrderEntity> findOrdersBycmdDateBetween(Date start, Date end);
	List<OrderEntity> findOrdersByClientIdAndCmdDateBetween(Long id,Date start, Date end);
	
}
