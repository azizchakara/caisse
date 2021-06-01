package app.neotech.gestion.de.caisse.services.impl;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import app.neotech.gestion.de.caisse.entities.OrderEntity;
import app.neotech.gestion.de.caisse.mapper.OrderMapper;
import app.neotech.gestion.de.caisse.repositories.ClientRepository;
import app.neotech.gestion.de.caisse.repositories.OrderRepository;
import app.neotech.gestion.de.caisse.services.OrderService;
import app.neotech.gestion.de.caisse.shared.dto.OrderDetailsDto;
import app.neotech.gestion.de.caisse.shared.dto.OrderDto;


@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	ClientRepository clientRepository;
	
	@Autowired
	OrderMapper orderMapper;


	@Override
	public OrderDto createOrder(OrderDto order) {

	
		for (int i=0; i < order.getDetails().size(); i++) {
			OrderDetailsDto details = order.getDetails().get(i);
			details.setOrder(order);
			order.getDetails().set(i, details);
		}
	
		ModelMapper modelMapper = new ModelMapper();
		OrderEntity orderEntity = modelMapper.map(order, OrderEntity.class);
		OrderEntity newOrder = orderRepository.save(orderEntity);
		OrderDto orderDto = modelMapper.map(newOrder, OrderDto.class);
		return orderDto;
		
		/*
		OrderEntity orderEntity = orderMapper.modelToEntity(order);
		OrderEntity newOrder = orderRepository.save(orderEntity);
		return orderMapper.entityToModel(newOrder);
		*/
		
	}


	@Override
	public OrderDto getOrderById(Long id) {
		
		OrderEntity orderEntity = orderRepository.findOrderById(id);
		if(orderEntity == null) throw null;
		ModelMapper modelMapper = new ModelMapper();
		
		OrderDto orderDto = modelMapper.map(orderEntity, OrderDto.class);
		return orderDto;
	}


	@Override
	public OrderDto updateOrder(Long id, OrderDto orderDto) {
		OrderEntity orderEntity = orderRepository.findOrderById(id);
		if(orderEntity == null) 
			return null;
		orderEntity.setCmdDate(orderDto.getCmdDate());
		orderEntity.setCmdNum(orderDto.getCmdNum());
		orderEntity.setTotal(orderDto.getTotal());
		orderEntity.setValide(orderDto.getValide());
		OrderEntity orderUpdated = orderRepository.save(orderEntity);
		OrderDto order = orderMapper.entityToModel(orderUpdated);
		//BeanUtils.copyProperties(orderUpdated, order);
		return order;
	}


	@Override
	public void deleteOrder(Long id) {
		
		OrderEntity orderEntity = orderRepository.findOrderById(id);
		if(orderEntity == null) throw null;
		orderRepository.delete(orderEntity);
		
	}


	@Override
	public  List<OrderDto> getOrdersByClientId(Long id) {
		
		List<OrderEntity> orders = orderRepository.findOrderByClientId(id);
		//List<OrderDto> orderDto = orderMapper.entitiesToModels(orders);
		ModelMapper modelMapper = new ModelMapper();
		Type listType = new TypeToken<List<OrderDto>>() {}.getType();
		List<OrderDto> orderDto = modelMapper.map(orders, listType);
		return orderDto;
		
	}


	@Override
	public List<OrderDto> getOrderByDateCmd(Date dateCmd) {
		List<OrderEntity> orders = orderRepository.findOrderBycmdDate(dateCmd);
		if(orders == null) throw null;
		List<OrderDto> orderDto = orderMapper.entitiesToModels(orders);
		return orderDto;
	}


	@Override
	public Set<OrderDto> gerOrdersBetweenDates(Date start, Date end) {
		Set<OrderEntity> orders = orderRepository.findOrdersBycmdDateBetween(start, end);
		ModelMapper modelMapper = new ModelMapper();
		Type listType = new TypeToken<Set<OrderDto>>() {}.getType();
		Set<OrderDto> orderDto = modelMapper.map(orders, listType);
		return orderDto;
	}


	@Override
	public List<OrderDto> getOrdersByClientIdAndBetweenDate(Long id, Date start, Date end) {
		List<OrderEntity> orders = orderRepository.findOrdersByClientIdAndCmdDateBetween(id, start, end);
		List<OrderDto> orderDto = orderMapper.entitiesToModels(orders);
		return orderDto;
	}

/*
	@Override
	public List<OrderDto> getOrders(int page, int limit) {
		List<OrderDto> ordersDto = new ArrayList<>();
		Pageable pageableRequest = PageRequest.of(page, limit);
		Page<OrderEntity> orderPage = orderRepository.findAll(pageableRequest);
		List<OrderEntity> orders = orderPage.getContent();
		for(OrderEntity orderEntity: orders) {
			OrderDto order = new OrderDto();
			BeanUtils.copyProperties(orderEntity, order);
			ordersDto.add(order);
		}
		return ordersDto;
	}

*/
	
	@Override
	public List<OrderDto> getOrders(int page, int limit) {
		List<OrderEntity> orders = orderRepository.findAll();
		ModelMapper modelMapper = new ModelMapper();
		Type listType = new TypeToken<List<OrderDto>>() {}.getType();
		List<OrderDto> orderDto = modelMapper.map(orders, listType);
		return orderDto;
	}


	@Override
	public List<OrderDto> getOrdersByTableId(Long id) {
		List<OrderEntity> orders = orderRepository.findOrderByTableId(id);
		//List<OrderDto> orderDto = orderMapper.entitiesToModels(orders);
		ModelMapper modelMapper = new ModelMapper();
		Type listType = new TypeToken<List<OrderDto>>() {}.getType();
		List<OrderDto> orderDto = modelMapper.map(orders, listType);
		return orderDto;
	}


	

}
