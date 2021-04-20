package app.neotech.gestion.de.caisse.controllers;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.neotech.gestion.de.caisse.responses.CategoryResponse;
import app.neotech.gestion.de.caisse.responses.OrderDetailsResponse;
import app.neotech.gestion.de.caisse.services.OrderDetailsService;
import app.neotech.gestion.de.caisse.shared.dto.OrderDetailsDto;
import app.neotech.gestion.de.caisse.shared.dto.ProductDto;


@RestController
@RequestMapping("/details")
@CrossOrigin
public class OrderDetailsController {

	@Autowired
	OrderDetailsService orderdetailsService;
	
	@GetMapping(path="/order/{id}")
	public ResponseEntity<List<OrderDetailsResponse>> getDetailsByOrderId(@PathVariable Long id){
		List<OrderDetailsDto> details = orderdetailsService.getDeatilsByOrderId(id);
		ModelMapper modelMapper = new ModelMapper();
		Type listType = new TypeToken<List<OrderDetailsResponse>>() {}.getType();
		List<OrderDetailsResponse> detailsorder = modelMapper.map(details, listType);
		return new ResponseEntity<List<OrderDetailsResponse>>(detailsorder,HttpStatus.OK);
	}
}
