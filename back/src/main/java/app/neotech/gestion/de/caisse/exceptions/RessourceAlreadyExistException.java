package app.neotech.gestion.de.caisse.exceptions;

public class RessourceAlreadyExistException extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7345504075971589504L;

	public RessourceAlreadyExistException(String warning) {
		super(warning);
	}
	
}
