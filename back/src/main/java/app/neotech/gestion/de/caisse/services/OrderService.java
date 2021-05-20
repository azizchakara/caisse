package app.neotech.gestion.de.caisse.services;

import java.util.Date;
import java.util.List;
import java.util.Set;

import app.neotech.gestion.de.caisse.shared.dto.OrderDto;

public interface OrderService {

	OrderDto createOrder(OrderDto orderDto);
	OrderDto getOrderById(Long id);
	OrderDto updateOrder(Long id, OrderDto orderDto);
	List<OrderDto> getOrderByDateCmd(Date dateCmd);
	void deleteOrder(Long id);
	List<OrderDto> getOrdersByClientId(Long id);
	Set<OrderDto> gerOrdersBetweenDates(Date start, Date end);
	List<OrderDto> getOrdersByClientIdAndBetweenDate(Long id,Date start, Date end);
	List<OrderDto> getOrders(int page, int limit);
	
}
