package app.neotech.gestion.de.caisse.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import app.neotech.gestion.de.caisse.entities.BillEntity;
import app.neotech.gestion.de.caisse.mapper.BillMapper;
import app.neotech.gestion.de.caisse.repositories.BillRepository;
import app.neotech.gestion.de.caisse.services.BillService;
import app.neotech.gestion.de.caisse.shared.dto.BillDto;


@Service
public class BillServiceImpl implements BillService {

	@Autowired
	BillRepository billRepository;
	@Autowired
	BillMapper billMapper;
	
	
	
	
	@Override
	public BillDto createBill(BillDto bill) {
		
		BillEntity billEntity = billMapper.modelToEntity(bill);
		BillEntity newBill = billRepository.save(billEntity);
		return billMapper.entityToModel(newBill);
	}


	@Override
	public BillDto updateBill(Long id, BillDto billDto) {
		BillEntity billEntity = billRepository.findBillById(id);
		if(billEntity==null) throw null; 
		billEntity.setBillDate(billDto.getBillDate());
		billEntity.setBillNumber(billDto.getBillNumber());
		billEntity.setTotal(billDto.getTotal());
		BillEntity billUpdated = billRepository.save(billEntity);
		BillDto bill = new BillDto();
		BeanUtils.copyProperties(billUpdated, bill);
		
		return bill;
	}


	@Override
	public void DeleteBill(Long id) {
		BillEntity billEntity = billRepository.findBillById(id);
		if(billEntity==null) throw null; 
		billRepository.delete(billEntity);
		
	}


	@Override
	public BillDto getBillById(Long id) {
		BillEntity billEntity = billRepository.findBillById(id);
		if(billEntity==null) throw null; 
		BillDto billDto = billMapper.entityToModel(billEntity);
		return billDto;
	}

	//Not Working
	@Override
	public List<BillDto> getBillsByDate(Date start) {
		List<BillEntity> bills = billRepository.findBillsBybillDate(start);
		if(bills==null) throw null; 
		List<BillDto> billDto = billMapper.entitiesToModels(bills);
		return billDto;
	}


	@Override
	public List<BillDto> getBillsBetweenDates(Date start, Date end) {
		List<BillEntity> bills = billRepository.findBillsBybillDateBetween(start, end);
		List<BillDto> billDto = billMapper.entitiesToModels(bills);
		return billDto;
		
	}


	@Override
	public List<BillDto> getBillsBetweenDatesAndTotalLess(Date start, Date end, Double total) {
		List<BillEntity> bills = billRepository.findBillsBybillDateBetweenAndTotalLessThan(start, end, total);
		List<BillDto> billDto = billMapper.entitiesToModels(bills);
		return billDto;
	}


	@Override
	public List<BillDto> getBills(int page, int limit) {
		if(page > 0) page -=1;
		List<BillDto> billsDto = new ArrayList<>();
		Pageable pageableRequest = PageRequest.of(page, limit);
		Page<BillEntity> billPage = billRepository.findAll(pageableRequest);
		List<BillEntity> bills = billPage.getContent();
		for(BillEntity billEntity:bills) {
			BillDto bill = new BillDto();
			BeanUtils.copyProperties( billEntity, bill);
			billsDto.add(bill);
		}
		return billsDto;
	}


	

}
