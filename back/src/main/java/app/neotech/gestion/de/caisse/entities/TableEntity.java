package app.neotech.gestion.de.caisse.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name="tables")
public class TableEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -4897680436642468810L;
	@Id
	@GeneratedValue
	private long id;
	@Column(nullable=false)
	private double tablenum;
	@Column(nullable=false)
	private double tableplace;
	
	
	@OneToOne(mappedBy = "table",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "order_id")
	private OrderEntity order;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public double getTablenum() {
		return tablenum;
	}
	public void setTablenum(double tablenum) {
		this.tablenum = tablenum;
	}
	public double getTableplace() {
		return tableplace;
	}
	public void setTableplace(double tableplace) {
		this.tableplace = tableplace;
	}
	public OrderEntity getOrder() {
		return order;
	}
	public void setOrder(OrderEntity order) {
		this.order = order;
	}

	
	
}
