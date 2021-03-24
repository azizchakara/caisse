package app.neotech.gestion.de.caisse;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import app.neotech.gestion.de.caisse.entities.ProductEntity;
import app.neotech.gestion.de.caisse.mapper.ProductMapper;
import app.neotech.gestion.de.caisse.repositories.ProductRepository;
import app.neotech.gestion.de.caisse.services.ProductService;

class ProductServiceTest {

	@Autowired
	private ProductService service;
	
	@MockBean
	private ProductRepository repository;
	
	@Autowired
	ProductMapper productMapper;
	
	@Test
	public void getProductById() {
		Long id = 8L;
		//ProductEntity product = new ProductEntity(8L,"product",2,32,10,"PR33");
		
	}

}
