	package app.neotech.gestion.de.caisse.shared.dto;

import java.io.Serializable;
import java.util.Date;

import app.neotech.gestion.de.caisse.utils.PaiementType;

public class BillDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2787467849381661608L;

	private long id;
	private Date billDate;
	private double billNumber;
	private double total;
	private PaiementType type;
	
	
	
	
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

	
}
