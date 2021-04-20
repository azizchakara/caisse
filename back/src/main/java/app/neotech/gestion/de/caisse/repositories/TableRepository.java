package app.neotech.gestion.de.caisse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.neotech.gestion.de.caisse.entities.IngredientEntity;
import app.neotech.gestion.de.caisse.entities.TableEntity;

@Repository
public interface TableRepository extends JpaRepository<TableEntity, Long> {
	TableEntity findTableById(Long id);
}
