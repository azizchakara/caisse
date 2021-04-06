package app.neotech.gestion.de.caisse.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;


@Entity(name="products")
public class ProductEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -4386365322651966165L;

	@Id
	@GeneratedValue
	private long id;
	
	@Column(nullable=false)
	private String productName;

	@Column(nullable=false)
	private double price;
	
	@Column(nullable=false)
	private double stock;
	
	@Column(nullable=false)
	private String codeBar;
	
	
	@ManyToOne
	@JoinColumn(name="category_id")
	private CategoryEntity category;
	
    @ManyToMany
    @JoinTable(name="ingredients_product", joinColumns= {@JoinColumn(name="ingredient_id")}, inverseJoinColumns = {@JoinColumn(name="products_id")})
    private Set<IngredientEntity> ingredients = new HashSet<>();

    @ManyToMany(mappedBy="products")
    private Set<OrderEntity> orders = new HashSet<>();
    
    public ProductEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductEntity(long id, String productName, double price, double stock, String codeBar,
			CategoryEntity category, Set<IngredientEntity> ingredients) {
		super();
		this.id = id;
		this.productName = productName;
		this.price = price;
		this.stock = stock;
		this.codeBar = codeBar;
		this.category = category;
		this.ingredients = ingredients;
	}

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

	public CategoryEntity getCategory() {
		return category;
	}

	public void setCategory(CategoryEntity category) {
		this.category = category;
	}

	public Set<IngredientEntity> getIngredients() {
		return ingredients;
	}

	public void setIngredients(Set<IngredientEntity> ingredients) {
		this.ingredients = ingredients;
	}

	public Set<OrderEntity> getOrders() {
		return orders;
	}

	public void setOrders(Set<OrderEntity> orders) {
		this.orders = orders;
	}

	
	
}
