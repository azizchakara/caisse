package app.neotech.gestion.de.caisse.services;

import java.util.List;

import app.neotech.gestion.de.caisse.shared.dto.OrderDetailsDto;

public interface OrderDetailsService {

	List<OrderDetailsDto> getDeatilsByOrderId(Long id);
}
