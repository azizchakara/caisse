package app.neotech.gestion.de.caisse.entities;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity(name="clients")
public class ClientEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -1547410405940515144L;
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column(nullable=false)
	private String firstName;
	
	@Column(nullable=false, length=50)
	private String lastName;
	
	@Column(nullable=false, length=50)
	private String adresse;
	
	@Column(nullable=false, length=200)
	private int year;
	
	@Column(nullable=false)
	private String email;
	
	@Column(nullable=false, length=50)
	private String phone;
	
	@Column(nullable=false)
	private String codeClient;
	
	@OneToMany(mappedBy="client",fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private Set<OrderEntity> orders;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

	public String getCodeClient() {
		return codeClient;
	}

	public void setCodeClient(String codeClient) {
		this.codeClient = codeClient;
	}
	
	

}
