package app.neotech.gestion.de.caisse.shared.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonFormat;

public class OrderDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8354547638624300012L;
	
	
	private long id;
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date cmdDate;
	private long cmdNum;
	private double total;
	private Boolean valide;
	private ClientDto client;
	private Set<ProductDto> products;
	private List<OrderDetailsDto> details;
	private TableDto table;
	
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

	public List<OrderDetailsDto> getDetails() {
		return details;
	}
	public void setDetails(List<OrderDetailsDto> details) {
		this.details = details;
	}


	public Set<ProductDto> getProducts() {
		return products;
	}
	public void setProducts(Set<ProductDto> products) {
		this.products = products;
	}
	public TableDto getTable() {
		return table;
	}
	public void setTable(TableDto table) {
		this.table = table;
	}
	

	

}
