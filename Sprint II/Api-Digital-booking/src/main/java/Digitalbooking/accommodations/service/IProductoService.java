package Digitalbooking.accommodations.service;

import Digitalbooking.accommodations.dto.ProductoDTO;

import java.util.Set;

public interface IProductoService extends ICRUDService<ProductoDTO>{
    Set<ProductoDTO> findByCity(String citie);

}
