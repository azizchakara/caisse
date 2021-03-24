package app.neotech.gestion.de.caisse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import app.neotech.gestion.de.caisse.entities.CategoryEntity;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {

	CategoryEntity findCategoryById(Long Id);
	CategoryEntity findByCategoryName(String categoryName);
	
}
