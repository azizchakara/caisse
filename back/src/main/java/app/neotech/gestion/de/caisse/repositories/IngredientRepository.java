package app.neotech.gestion.de.caisse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.neotech.gestion.de.caisse.entities.IngredientEntity;


@Repository
public interface IngredientRepository extends JpaRepository<IngredientEntity, Long> {
	
	IngredientEntity findIngredientById(Long id);

}
