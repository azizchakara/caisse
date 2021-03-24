package app.neotech.gestion.de.caisse.shared.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

public class OrderDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8354547638624300012L;
	
	
	private long id;
	
	private Date cmdDate;
	private long cmdNum;
	private double total;
	private Boolean valide;
	private ClientDto client;
	private BillDto bill;
	private Set<ProductDto> products;
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public Date getCmdDate() {
		return cmdDate;
	}
	public void setCmdDate(Date cmdDate) {
		this.cmdDate = cmdDate;
	}
	public long getCmdNum() {
		return cmdNum;
	}
	public void setCmdNum(long cmdNum) {
		this.cmdNum = cmdNum;
	}
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	public Boolean getValide() {
		return valide;
	}
	public void setValide(Boolean valide) {
		this.valide = valide;
	}
	public ClientDto getClient() {
		return client;
	}
	public void setClient(ClientDto client) {
		this.client = client;
	}
	public BillDto getBill() {
		return bill;
	}
	public void setBill(BillDto bill) {
		this.bill = bill;
	}
	public Set<ProductDto> getProducts() {
		return products;
	}
	public void setProducts(Set<ProductDto> products) {
		this.products = products;
	}
		
	
	
	

}
