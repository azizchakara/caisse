package app.neotech.gestion.de.caisse.services.impl;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.neotech.gestion.de.caisse.entities.ProductEntity;
import app.neotech.gestion.de.caisse.mapper.ProductMapper;
import app.neotech.gestion.de.caisse.repositories.ProductRepository;
import app.neotech.gestion.de.caisse.services.ProductService;
import app.neotech.gestion.de.caisse.shared.dto.ProductDto;

@Service
public class ProductServiceImpl implements ProductService {

	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	ProductMapper productMapper;
	/*
	@Autowired
	CategoryEntity categoryEntity;
	
	@Autowired
	CategoryDto categoryDto;
	*/
	
	
	@Override
	public ProductDto createProduct(ProductDto product) {
		ProductEntity productEntity = productMapper.modelToEntity(product);
		ProductEntity newProduct = productRepository.save(productEntity);
		return productMapper.entityToModel(newProduct);
	}

	@Override
	public ProductDto getProductById(Long id) {
		ProductEntity productEntity = productRepository.findProductById(id);
		if(productEntity == null) throw null;
		ProductDto productDto = productMapper.entityToModel(productEntity);
		return productDto;
	}

	@Override
	public ProductDto updateProduct(Long id, ProductDto productDto) {
		ProductEntity productEntity = productRepository.findProductById(id);
		if(productEntity == null) return null;
		productEntity.setProductName(productDto.getProductName());
		productEntity.setPrice(productDto.getPrice());
		productEntity.setQuantity(productDto.getQuantity());
		productEntity.setStock(productDto.getStock());
		productEntity.setCodeBar(productDto.getCodeBar());
		ProductEntity productUpdated = productRepository.save(productEntity);
		ProductDto product = productMapper.entityToModel(productUpdated);
		return product;
	}

	@Override
	public void deleteProduct(long id) {
		ProductEntity productEntity = productRepository.findProductById(id);
		if(productEntity == null) throw null;
		productRepository.delete(productEntity);
		
	}

	@Override
	public List<ProductDto> getProductsByCategoryId(Long id) {
		List<ProductEntity> products = productRepository.findProductsByCategoryId(id);
		ModelMapper modelMapper = new ModelMapper();
		Type listType = new TypeToken<List<ProductDto>>() {}.getType();
		List<ProductDto> productDto = modelMapper.map(products, listType);
		return productDto;

	}

	@Override
	public List<ProductDto> getProducts(int page, int limit) {
		
		List<ProductEntity> products = productRepository.findAll();
		ModelMapper modelMapper = new ModelMapper();
		Type listType = new TypeToken<List<ProductDto>>() {}.getType();
		List<ProductDto> productDto = modelMapper.map(products, listType);
		return productDto;

		
	}

}
