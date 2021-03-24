package app.neotech.gestion.de.caisse.requests;

import java.util.Date;

public class BillRequest {
	

	private Date dateFacture;
	private double numeroFacture;
	private double total;

	
	public Date getDateFacture() {
		return dateFacture;
	}
	public void setDateFacture(Date dateFacture) {
		this.dateFacture = dateFacture;
	}
	public double getNumeroFacture() {
		return numeroFacture;
	}
	public void setNumeroFacture(double numeroFacture) {
		this.numeroFacture = numeroFacture;
	}
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	
	
	

}
