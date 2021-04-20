package app.neotech.gestion.de.caisse.services.impl;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.neotech.gestion.de.caisse.entities.OrderDetailsEntity;
import app.neotech.gestion.de.caisse.repositories.OrderDetailsRepository;
import app.neotech.gestion.de.caisse.services.OrderDetailsService;
import app.neotech.gestion.de.caisse.shared.dto.OrderDetailsDto;


@Service
public class OrderDetailsServiceImpl implements OrderDetailsService {

	@Autowired
	OrderDetailsRepository orderDetailsRepository;
	
	@Override
	public List<OrderDetailsDto> getDeatilsByOrderId(Long id) {
		List<OrderDetailsEntity> details = orderDetailsRepository.findDetailsByOrderId(id);
		ModelMapper modelMapper = new ModelMapper();
		Type listType = new TypeToken<List<OrderDetailsDto>>() {}.getType();
		List<OrderDetailsDto> orderDetailsDto = modelMapper.map(details, listType);
		return orderDetailsDto;
	}

}
