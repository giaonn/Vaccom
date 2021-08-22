package org.vaccom.vcmgt.service;

import java.util.List;

import org.springframework.stereotype.Service;

import org.vaccom.vcmgt.entity.MuiTiemChung;

/**
 * @author vaccom
 *
 */
@Service
public interface MuiTiemChungService {
	
	public void deleteById(long id);
	
	public MuiTiemChung updateMuiTiemChung(MuiTiemChung muiTiemChung);
	
	public MuiTiemChung findById(long id);
	
	public List<MuiTiemChung> findByCmtcccd(String cmtcccd);

	public List<MuiTiemChung> findByCoSoYTeMa(String coSoYTeMa, int page, int size);
	
	public List<MuiTiemChung> findAll();
}
