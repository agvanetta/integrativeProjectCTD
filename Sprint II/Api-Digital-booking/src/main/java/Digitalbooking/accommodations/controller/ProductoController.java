package Digitalbooking.accommodations.controller;


import Digitalbooking.accommodations.dto.ProductoDTO;
import Digitalbooking.accommodations.service.impl.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

     @GetMapping("/{id}")
     public ResponseEntity<ProductoDTO> findByid(@PathVariable("id") Integer id){
         ProductoDTO categoriaDTO=productoService.findById(id);
    return  new ResponseEntity<>(categoriaDTO, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<ProductoDTO>create(@RequestBody ProductoDTO productoDTO){
         ProductoDTO newProductoDTO = productoService.create(productoDTO);
         return  new ResponseEntity<>(newProductoDTO, HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Set<ProductoDTO>>findAll(){
         Set<ProductoDTO>productoDTOSet=productoService.findAll();
         return  new ResponseEntity<>(productoDTOSet,HttpStatus.OK);
    }

    @GetMapping("/ciudades/{ciudad}")
    public ResponseEntity<Set<ProductoDTO>>findByCity(@PathVariable("ciudad") String ciudad){
        Set<ProductoDTO>productoDTOSet=productoService.findByCity(ciudad);
        return  new ResponseEntity<>(productoDTOSet,HttpStatus.OK);
    }
}
