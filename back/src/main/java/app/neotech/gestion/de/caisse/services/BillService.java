package app.neotech.gestion.de.caisse.services;

import java.util.Date;
import java.util.List;


import app.neotech.gestion.de.caisse.shared.dto.BillDto;

public interface BillService {

	BillDto createBill(BillDto billDto);
	BillDto updateBill(Long id,BillDto billDto);
	BillDto getBillById(Long id);
	void DeleteBill (Long id);
	List<BillDto> getBillsByDate(Date start);
	List<BillDto> getBillsBetweenDates(Date start, Date end);
	List<BillDto> getBillsBetweenDatesAndTotalLess(Date start, Date end, Double total);
	List<BillDto> getBills(int page, int limit);
	
	
}