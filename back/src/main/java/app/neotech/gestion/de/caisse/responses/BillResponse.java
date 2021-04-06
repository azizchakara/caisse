package app.neotech.gestion.de.caisse.responses;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import app.neotech.gestion.de.caisse.utils.PaiementType;

public class BillResponse {


	private long id;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date billDate;
	private double billNumber;
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
	public PaiementType getType() {
		return type;
	}
	public void setType(PaiementType type) {
		this.type = type;
	}
	
	
	
}
