package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.dto.ProductoDTO;
import Digitalbooking.accommodations.entities.Producto;
import Digitalbooking.accommodations.repository.IProductoRepository;
import Digitalbooking.accommodations.service.IProductoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;


@Service
public class ProductoService implements IProductoService {

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public ProductoDTO findById(Integer id) {
        Optional<Producto>producto=productoRepository.findById(id);
        ProductoDTO productoDTO = null;
        if(producto.isPresent())
            productoDTO=mapper.convertValue(producto,ProductoDTO.class);
        return  productoDTO;
    }

    @Override
    public ProductoDTO create(ProductoDTO productoDTO) {
        Producto producto = mapper.convertValue(productoDTO, Producto.class);
        Producto resProducto= productoRepository.save(producto);
        ProductoDTO resProductoDTO=mapper.convertValue(resProducto,ProductoDTO.class);
        return resProductoDTO;
    }

    @Override
    public void deleteById(Integer id) {
        productoRepository.deleteById(id);
    }

    @Override
    public ProductoDTO update(ProductoDTO productoDTO) {
        Producto producto = mapper.convertValue(productoDTO,Producto.class);
        Producto updateProducto=productoRepository.save(producto);
        ProductoDTO updateProductoDTO=mapper.convertValue(updateProducto, ProductoDTO.class);
        return  updateProductoDTO;
    }

    @Override
    public Set<ProductoDTO> findAll() {
        List<Producto>productos=productoRepository.findAll();
        Set<ProductoDTO>productosDTO= new HashSet<>();
        for (Producto producto : productos){
            productosDTO.add(mapper.convertValue(producto,ProductoDTO.class));
        }
        return  productosDTO;
    }

    @Override
    public Set<ProductoDTO> findByCity(String citie) {
        List<Producto>productos=productoRepository.findAll();
        Set<ProductoDTO>productosDTO= new HashSet<>();
        for (Producto producto : productos){
            if (producto.getCiudad().getCity().equals(citie))
                productosDTO.add(mapper.convertValue(producto,ProductoDTO.class));
        }
        return  productosDTO;
    }
}


