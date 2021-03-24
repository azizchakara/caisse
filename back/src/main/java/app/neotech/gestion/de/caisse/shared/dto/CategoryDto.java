package app.neotech.gestion.de.caisse.shared.dto;

import java.io.Serializable;

public class CategoryDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2469274879523376448L;
	
	private long id;
	private String logo;
	private String categoryName;
	
	public CategoryDto() {
		super();
	}
	
	public CategoryDto(Long id, String logo, String categoryName) {
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
	public String getLogo() {
		return logo;
	}
	public void setLogo(String logo) {
		this.logo = logo;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	
	
	

}
