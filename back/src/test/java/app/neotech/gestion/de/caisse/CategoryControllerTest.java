package app.neotech.gestion.de.caisse;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import app.neotech.gestion.de.caisse.configuration.H2TestConfiguration;
import app.neotech.gestion.de.caisse.repositories.CategoryRepository;
import app.neotech.gestion.de.caisse.services.CategoryService;
import app.neotech.gestion.de.caisse.shared.dto.CategoryDto;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest(classes = {
H2TestConfiguration.class,Application.class
})

@ActiveProfiles("test")
public class CategoryControllerTest {

	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	CategoryService service;
	
	@Autowired
	CategoryRepository repository;
	
	CategoryDto category = new CategoryDto(8L,"juice","J");
	String newCategory = "{\n" +"\"categoryName\" : \"juice\" , \n" + "\"logo\": \"J\"\n"+"}";
	
	@Test
	public void createCategory_succeded() throws Exception {
		MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/categories")
				.content(newCategory)
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isCreated())
				.andReturn();
		
        MockHttpServletResponse response = result.getResponse();
        System.out.println(response.getContentAsString());
        assertEquals(HttpStatus.CREATED.value(), response.getStatus());

	}
	
	@Test
	public void updateCategory() throws Exception {
		
		String updatedCategory = "{\n" + " \"categoryName\" : \"juice\" ,\n" + "\"logo\": \"J\" \n" +"}";
		MvcResult updated = mockMvc.perform(MockMvcRequestBuilders.put("/categories/8")
				.content(updatedCategory)
				.contentType(MediaType.APPLICATION_JSON))
				.andReturn();
		
		MockHttpServletResponse response = updated.getResponse();
		assertEquals(HttpStatus.ACCEPTED.value(), response.getStatus());
		String rsString = updated.getResponse().getContentAsString();
		JSONObject resjson = new JSONObject(rsString);
		System.out.println(resjson.getJSONObject("updated").getString("categoryName"));
		assertEquals("juice",resjson.getJSONObject("updated").getString("categoryName"));
		assertEquals("Juicy",resjson.getJSONObject("updated").getString("logo"));

	}
	
	
	@Test
	public void deleteCategoryById() throws Exception {
		MvcResult deleted = mockMvc.perform(MockMvcRequestBuilders.delete("/categories/8")
				.contentType(MediaType.APPLICATION_JSON))
				.andReturn();
		MockHttpServletResponse response = deleted.getResponse();
		assertEquals(HttpStatus.NO_CONTENT.value(), response.getStatus());
	
	}
	
}