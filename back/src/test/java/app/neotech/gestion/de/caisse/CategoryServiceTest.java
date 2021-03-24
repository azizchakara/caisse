package app.neotech.gestion.de.caisse;

import static org.assertj.core.api.Assertions.assertThat;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import org.junit.Before;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;
import app.neotech.gestion.de.caisse.entities.CategoryEntity;
import app.neotech.gestion.de.caisse.exceptions.CategoryAlreadyExist;
import app.neotech.gestion.de.caisse.exceptions.NullException;
import app.neotech.gestion.de.caisse.mapper.CategoryMapper;
import app.neotech.gestion.de.caisse.repositories.CategoryRepository;
import app.neotech.gestion.de.caisse.services.CategoryService;
import app.neotech.gestion.de.caisse.shared.dto.CategoryDto;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CategoryServiceTest {
	
	@Autowired
	private CategoryService service;
	
	@MockBean
	private CategoryRepository repository;
	
	@Autowired
	CategoryMapper categoryMapper;
	
    @Before
    public void setUp() throws Exception {
        repository = Mockito.mock(repository.getClass());

    }
    
    
	@Test
	public void getCategoryByIdTest() {
		
		Long id = 1L;
		CategoryEntity category = new CategoryEntity(8L,"sauce","salg");
		when(repository.findCategoryById(id)).thenReturn(category);
		assertEquals(8L, service.getCategoryById(id).getId());
		
	}
	
	
	@Test
	public void createCategory() throws NullException, CategoryAlreadyExist {
		
		CategoryDto categoryDto = new CategoryDto();
		categoryDto.setCategoryName("juice");
		categoryDto.setLogo("jui");
		CategoryEntity category = categoryMapper.modelToEntity(categoryDto);
		Mockito.when(repository.save(Mockito.any(CategoryEntity.class))).thenReturn(category);
		CategoryDto categoryCreated = service.createCategory(categoryDto);
		assertEquals(categoryCreated.getCategoryName(),categoryDto.getCategoryName());
		assertEquals(categoryCreated.getLogo(),categoryDto.getLogo());
		
	}
	
	@Test
	public void createCategory_categoryAlreadyExist() throws CategoryAlreadyExist {
		Assertions.assertThrows(CategoryAlreadyExist.class, () -> { 
			CategoryDto categoryDto = new CategoryDto();
			categoryDto.setCategoryName("juice");
			categoryDto.setLogo("jui");
			CategoryEntity category = categoryMapper.modelToEntity(categoryDto);
			Mockito.when(repository.save(Mockito.any(CategoryEntity.class))).thenReturn(category);
			Mockito.when(repository.findByCategoryName(Mockito.anyString())).thenReturn(category);
			CategoryDto created = service.createCategory(categoryDto);
			
		});
		
	}
	
	@Test
	public void createCategory_whenCategoryNameisEmpty() throws NullException {
		Assertions.assertThrows(NullException.class,() -> {
                	CategoryDto categoryDto = new CategoryDto();
            		categoryDto.setLogo("jui");
            		CategoryEntity category = categoryMapper.modelToEntity(categoryDto);
            		Mockito.when(repository.save(Mockito.any(CategoryEntity.class))).thenReturn(category);
            		CategoryDto created = service.createCategory(categoryDto);
                });
	}
	
	@Test
	public void deleteCategory() {
		
		CategoryEntity category = new CategoryEntity();
		category.setCategoryName("juice");
		category.setLogo("jui");
		category.setId(8);
		repository.deleteById(8L);
		Mockito.verify(repository, times(1)).deleteById(8L);;
		assertThat(HttpStatus.NO_CONTENT);
		
	}
	
}