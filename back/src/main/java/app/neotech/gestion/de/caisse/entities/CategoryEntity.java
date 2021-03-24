package app.neotech.gestion.de.caisse.entities;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity(name="category")
public class CategoryEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5905477040834657429L;

	@Id
	@GeneratedValue
	private long id;
	
	@Column(nullable=false, unique=true)
	private String categoryName;
	
	@Column(nullable=false)
	private String logo;
	
	@OneToMany(mappedBy = "category",fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private Set<ProductEntity> product; 

	
	
	public CategoryEntity() {
		super();
	}

	public CategoryEntity(long id, String logo, String categoryName) {
		super();
		this.id= id;
		this.logo = logo;
		this.categoryName = categoryName;	
		}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}
	
	
}
