package app.neotech.gestion.de.caisse.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.springframework.format.annotation.DateTimeFormat;

import app.neotech.gestion.de.caisse.utils.PaiementType;

@Entity(name="bill")
public class BillEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -4801356273708885180L;


	@Id
	@GeneratedValue
	private long id;
	
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(nullable=false)
	private Date billDate;
	
	@Column(nullable=false)
	private double billNumber;
	
	@Column(nullable=false)
	private double total;
	
	@Enumerated(EnumType.STRING)
	private PaiementType type;
	
	@OneToOne(mappedBy = "bill",fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	 private OrderEntity orders;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

		
	public Date getBillDate() {
		return billDate;
	}

	public void setBillDate(Date billDate) {
		this.billDate = billDate;
	}

	public double getBillNumber() {
		return billNumber;
	}

	public void setBillNumber(double billNumber) {
		this.billNumber = billNumber;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public PaiementType getType() {
		return type;
	}

	public void setType(PaiementType type) {
		this.type = type;
	}

	public OrderEntity getOrders() {
		return orders;
	}

	public void setOrders(OrderEntity orders) {
		this.orders = orders;
	}
	
	
	
}
