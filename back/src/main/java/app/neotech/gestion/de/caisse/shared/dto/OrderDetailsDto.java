package app.neotech.gestion.de.caisse.shared.dto;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

public class OrderDetailsDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -774007451188301340L;
	
	
	private long id;
	private String name;
	private long quantity;
	private OrderDto order;
	
	
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
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	
	public OrderDto getOrder() {
		return order;
	}
	public void setOrder(OrderDto order) {
		this.order = order;
	}
	
	

	
}
	
	

