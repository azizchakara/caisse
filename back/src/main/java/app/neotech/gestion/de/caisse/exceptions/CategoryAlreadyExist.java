package app.neotech.gestion.de.caisse.exceptions;

public class CategoryAlreadyExist extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7359128925933817241L;

	public CategoryAlreadyExist(String warning) {
		super(warning);
	}
}
