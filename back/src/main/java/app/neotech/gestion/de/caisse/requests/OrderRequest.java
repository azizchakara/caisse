package app.neotech.gestion.de.caisse.requests;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import app.neotech.gestion.de.caisse.shared.dto.ClientDto;
import app.neotech.gestion.de.caisse.shared.dto.TableDto;

public class OrderRequest {
	

	@JsonFormat(pattern="yyyy-MM-dd")
	private Date cmdDate;
	private long cmdNum;
	private double total;
	private Boolean valide;
	private ClientDto client;
	private String note;
	private List<OrderDetailsRequest> details;
	
	private TableDto table;
	
	public Date getCmdDate() {
		return cmdDate;
	}
	public void setCmdDate(Date cmdDate) {
		this.cmdDate = cmdDate;
	}
	public long getCmdNum() {
		return cmdNum;
	}
	public void setCmdNum(long cmdNum) {
		this.cmdNum = cmdNum;
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
	public ClientDto getClient() {
		return client;
	}
	public void setClient(ClientDto client) {
		this.client = client;
	}
	public List<OrderDetailsRequest> getDetails() {
		return details;
	}
	public void setDetails(List<OrderDetailsRequest> details) {
		this.details = details;
	}
	public TableDto getTable() {
		return table;
	}
	public void setTable(TableDto table) {
		this.table = table;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}

	
	
	
	
}
