package app.neotech.gestion.de.caisse.services;


import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import app.neotech.gestion.de.caisse.shared.dto.ProductDto;

public interface ProductService {

	ProductDto createProduct(ProductDto productDto);
	ProductDto getProductById(Long id);
	ProductDto updateProduct(Long id, ProductDto productDto);
	void deleteProduct(long id);
	List<ProductDto> getProductsByCategoryId(Long id);
	List<ProductDto> getProducts(int page, int limit);

	

}
