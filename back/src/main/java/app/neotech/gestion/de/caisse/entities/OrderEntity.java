package app.neotech.gestion.de.caisse.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import org.springframework.format.annotation.DateTimeFormat;


@Entity(name = "orders")
public class OrderEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8681337731114507231L;

	@Id
	@GeneratedValue
	private long id;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(nullable=false)
	private Date cmdDate;

	@Column(nullable = false)
	private long cmdNum;

	@Column(nullable = false)
	private double total;

	@Column(nullable = false)
	private Boolean valide;

	@OneToOne(mappedBy = "order",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "bill_id")
	private BillEntity bill;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	@JoinColumn(name = "client_id")
	private ClientEntity client;


	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
	private List<OrderDetailsEntity> details; 


	@ManyToMany
	@JoinTable(name = "products_orders", joinColumns = { @JoinColumn(name = "orders_id") }, inverseJoinColumns = {
			@JoinColumn(name = "products_id") })
	private Set<ProductEntity> products = new HashSet<>();
	
	
	@OneToOne
	@JoinColumn(name = "table_id")
	 private TableEntity table;
	
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

	public BillEntity getBill() {
		return bill;
	}

	public void setBill(BillEntity bill) {
		this.bill = bill;
	}

	public ClientEntity getClient() {
		return client;
	}

	public void setClient(ClientEntity client) {
		this.client = client;
	}

	public List<OrderDetailsEntity> getDetails() {
		return details;
	}

	public void setDetails(List<OrderDetailsEntity> details) {
		this.details = details;
	}

	public Set<ProductEntity> getProducts() {
		return products;
	}

	public void setProducts(Set<ProductEntity> products) {
		this.products = products;
	}

	public TableEntity getTable() {
		return table;
	}

	public void setTable(TableEntity table) {
		this.table = table;
	}

	
	
}
