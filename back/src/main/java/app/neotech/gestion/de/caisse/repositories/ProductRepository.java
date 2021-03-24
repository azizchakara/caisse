package app.neotech.gestion.de.caisse.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import app.neotech.gestion.de.caisse.entities.ProductEntity;


@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
	
	ProductEntity findProductById(Long id);
	List<ProductEntity> findProductsByCategoryId(Long id);
	
}
