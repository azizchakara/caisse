package app.neotech.gestion.de.caisse.responses;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import app.neotech.gestion.de.caisse.shared.dto.ClientDto;
import app.neotech.gestion.de.caisse.shared.dto.OrderDetailsDto;

public class OrderResponse {

	private long id;
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date cmdDate;
	private long cmdNum;
	private double total;
	private Boolean valide;
	private ClientDto client;
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
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

}
