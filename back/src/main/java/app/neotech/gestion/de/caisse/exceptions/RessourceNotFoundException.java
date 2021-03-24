package app.neotech.gestion.de.caisse.exceptions;

public class RessourceNotFoundException extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2385088557659280359L;

	public RessourceNotFoundException(String warning) {
		super(warning);
	}
}
