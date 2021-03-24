package app.neotech.gestion.de.caisse.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;


@Entity(name="ingredients")
public class IngredientEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5744463511839207083L;

	@Id
	@GeneratedValue
	private long id;
	
	@Column(nullable=false)
	private String name;
	
	@Column(nullable=false)
	
	private double quantity;
	
	@Column(nullable=false)
	private double price;
	
	@Column(nullable=false)
	private double Stock;
	
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "ingredients")
    private Set<ProductEntity> products = new HashSet<>();

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
		return Stock;
	}

	public void setStock(double stock) {
		Stock = stock;
	}


	
}
