package app.neotech.gestion.de.caisse.requests;

import java.util.Date;

public class OrderRequest {
	
	private Date dateCmd;
	private long numCmd;
	private double total;
	private Boolean valide;
	private long client_id;
	
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
	public long getClient_id() {
		return client_id;
	}
	public void setClient_id(long client_id) {
		this.client_id = client_id;
	}
	
	
}
