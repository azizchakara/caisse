package app.neotech.gestion.de.caisse.responses;

import java.util.Date;

public class OrderResponse {

	private Date dateCmd;
	private long numCmd;
	private double total;
	private Boolean valide;
	
	
	public Date getDateCmd() {
		return dateCmd;
	}
	public void setDateCmd(Date dateCmd) {
		this.dateCmd = dateCmd;
	}
	public long getNumCmd() {
		return numCmd;
	}
	public void setNumCmd(long numCmd) {
		this.numCmd = numCmd;
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
	
	
}
