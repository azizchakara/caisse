package app.neotech.gestion.de.caisse.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity(name="tables")
public class TableEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 4419132829663342286L;

	@Id
	@GeneratedValue
	private long id;
	
	@Column(nullable=false)
	private double numTable;
	
	@Column(nullable=false)
	private double etg;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getNumTable() {
		return numTable;
	}

	public void setNumTable(double numTable) {
		this.numTable = numTable;
	}

	public double getEtg() {
		return etg;
	}

	public void setEtg(double etg) {
		this.etg = etg;
	}
	
	
	
}
