package app.neotech.gestion.de.caisse.responses;

import java.util.Set;

import app.neotech.gestion.de.caisse.shared.dto.CategoryDto;
import app.neotech.gestion.de.caisse.shared.dto.IngredientDto;

public class ProductResponse {

	private long id;
	private String productName;
	private double quantity;
	private double price;
	private double stock;
	private String codeBar;
	private CategoryDto category;
	private Set<IngredientDto> ingredients;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getQuantity() {
		return quantity;
	}
	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getStock() {
		return stock;
	}
	public void setStock(double stock) {
		this.stock = stock;
	}
	public String getCodeBar() {
		return codeBar;
	}
	public void setCodeBar(String codeBar) {
		this.codeBar = codeBar;
	}
	public CategoryDto getCategory() {
		return category;
	}
	public void setCategory(CategoryDto category) {
		this.category = category;
	}
	public Set<IngredientDto> getIngredients() {
		return ingredients;
	}
	public void setIngredients(Set<IngredientDto> ingredients) {
		this.ingredients = ingredients;
	}
	
}
