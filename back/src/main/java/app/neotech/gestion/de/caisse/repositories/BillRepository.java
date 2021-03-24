package app.neotech.gestion.de.caisse.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.neotech.gestion.de.caisse.entities.BillEntity;



@Repository
public interface BillRepository extends JpaRepository<BillEntity, Long> {

	BillEntity findBillById(Long id);
	List<BillEntity> findBillsBybillDate(Date start );
	List<BillEntity> findBillsBybillDateBetween(Date start, Date end);
	List<BillEntity> findBillsBybillDateBetweenAndTotalLessThan(Date start, Date end, Double total);
}
