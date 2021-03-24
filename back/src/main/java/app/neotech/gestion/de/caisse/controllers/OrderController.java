package app.neotech.gestion.de.caisse.controllers;


import java.util.Date;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import app.neotech.gestion.de.caisse.services.ClientService;
import app.neotech.gestion.de.caisse.services.OrderService;
import app.neotech.gestion.de.caisse.shared.dto.OrderDto;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {
	
	@Autowired
	OrderService orderService;

	@Autowired
	ClientService clientService;
	
	@GetMapping(path="/{id}")
	public ResponseEntity<OrderDto> getOrder(@PathVariable Long id) {
		OrderDto orderDto = orderService.getOrderById(id);
		return new ResponseEntity<OrderDto>(orderDto,HttpStatus.OK);
	}
	
	@PostMapping  
	public ResponseEntity<OrderDto> createOrder(@RequestBody OrderDto orderDto) {
		OrderDto createOrder = orderService.createOrder(orderDto);
		return new ResponseEntity<OrderDto>(createOrder,HttpStatus.CREATED);
	}
	
	@PutMapping(path="/{id}")
	public ResponseEntity<OrderDto> updateOrder(@PathVariable Long id,@RequestBody OrderDto orderDto) {
		OrderDto updateOrder = orderService.updateOrder(id, orderDto);
		return new ResponseEntity<OrderDto>(updateOrder,HttpStatus.ACCEPTED);
		
	}
	@DeleteMapping(path="/{id}")
	public ResponseEntity<Object> deleteOrder(@PathVariable Long id) {
		orderService.deleteOrder(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping(path="clients/{id}")
	public ResponseEntity<List<OrderDto>>getOrdersByIdClient(@PathVariable Long id) {
		
		List<OrderDto> orders=orderService.getOrdersByClientId(id);
		return new ResponseEntity<List<OrderDto>>(orders,HttpStatus.OK);
		
	}
	@GetMapping(path="/date/{dateCmd}" )
	public ResponseEntity <List<OrderDto>>getOrderByDateCmd(@PathVariable("dateCmd") @DateTimeFormat(pattern = "yyyy-MM-dd") Date DateCmd) {
		List<OrderDto> orders = orderService.getOrderByDateCmd(DateCmd);
		return new ResponseEntity<List<OrderDto>>(orders,HttpStatus.OK);
	}
	
	@GetMapping(path="/{id}/{start}/{end}")
	public ResponseEntity<List<OrderDto>> getOrdersByClientIdBetween(@PathVariable Long id,@PathVariable("start") @DateTimeFormat(pattern="yyyy-MM-dd") Date start,@PathVariable("end") @DateTimeFormat(pattern="yyyy-MM-dd") Date end ){
		List<OrderDto> orders = orderService.getOrdersByClientIdAndBetweenDate(id, start, end);
		return new ResponseEntity<List<OrderDto>>(orders,HttpStatus.OK);
	}
	
	@GetMapping(path="/{start}/{end}")
	public ResponseEntity<Set<OrderDto>>getOrdersBetween(@PathVariable("start") @DateTimeFormat(pattern="yyyy-MM-dd") Date start,@PathVariable("end") @DateTimeFormat(pattern="yyyy-MM-dd") Date end){
		Set<OrderDto> orders=orderService.gerOrdersBetweenDates(start, end);
		return new ResponseEntity<Set<OrderDto>>(orders,HttpStatus.OK);
		
	}
	
	@GetMapping(path="/all")
	public ResponseEntity<List<OrderDto>>getAllOrders(@RequestParam(value="page",defaultValue="1") int page,@RequestParam(value="limit", defaultValue="15") int limit){
			List<OrderDto> orders = orderService.getOrders(page,limit);
			return new ResponseEntity<List<OrderDto>>(orders,HttpStatus.OK);
	}

	
	

	
	
}
