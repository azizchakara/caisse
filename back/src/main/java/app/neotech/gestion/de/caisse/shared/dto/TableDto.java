package app.neotech.gestion.de.caisse.shared.dto;

import java.io.Serializable;

public class TableDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5412777712355832698L;
	private long id;
	private double tableplace;
	private double tablenum;
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public double getTableplace() {
		return tableplace;
	}
	public void setTableplace(double tableplace) {
		this.tableplace = tableplace;
	}
	public double getTablenum() {
		return tablenum;
	}
	public void setTablenum(double tablenum) {
		this.tablenum = tablenum;
	}
	

	
}
