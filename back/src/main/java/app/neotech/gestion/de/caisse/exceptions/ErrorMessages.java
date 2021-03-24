package app.neotech.gestion.de.caisse.exceptions;

public enum ErrorMessages {

	MISSING_REQUIRED_FIELD("Missing Required field"),
	MISSING_REQUIRED_CATEGORY_NAME("Missing Required CategoryName Field");
	private String errorMessage;

	private ErrorMessages(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
	
}
