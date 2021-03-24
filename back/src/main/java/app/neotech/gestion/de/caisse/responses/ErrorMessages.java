package app.neotech.gestion.de.caisse.responses;

public enum ErrorMessages {
	
	MISSING_REQUIRED_FIELD("Missing Required Field"),
	RECORD_ALREADY_EXIST("Record Already Exist"),
	INTERNAL_SERVER_ERROR("Internal Error"),
	NO_RECORD_FOUND("Record requested is Not Found"),
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
