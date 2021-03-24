package app.neotech.gestion.de.caisse.shared.dto;

import java.io.Serializable;

public class IngredientDto implements Serializable{

	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6281200783129248707L;
	
	private long id;
	private String name;
	private double quantity;
	private double price;
	private double stock;
	
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	
	
	
}
