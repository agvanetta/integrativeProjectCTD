package Digitalbooking.accommodations.controller;


import Digitalbooking.accommodations.dto.CategoriaDTO;
import Digitalbooking.accommodations.service.impl.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;

import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @PostMapping()
    public ResponseEntity<CategoriaDTO> create(@RequestBody CategoriaDTO categoriaDTO){
        CategoriaDTO newCategoriaDTO = categoriaService.create(categoriaDTO);
        return new ResponseEntity<>(newCategoriaDTO, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteByid(@PathVariable("id") Integer id){
        categoriaService.deleteById(id);
        return new ResponseEntity<>("Categoria eliminada",HttpStatus.OK);
    }


    @PutMapping("/update")
    public ResponseEntity<CategoriaDTO> update(@RequestBody CategoriaDTO categoriaDTO) throws ServerException{
        if(categoriaService.findById(categoriaDTO.getId())==null){
            throw new ServerException("Categoria no encontrada");
        }else {
        CategoriaDTO updateCategoria= categoriaService.update(categoriaDTO);
        return new ResponseEntity<>(updateCategoria, HttpStatus.OK);
        }

    }

    @GetMapping("/list")
    public ResponseEntity<Set<CategoriaDTO>>findAll(){
        Set<CategoriaDTO> categoriaDTOSet=categoriaService.findAll();
        return new ResponseEntity<>(categoriaDTOSet,HttpStatus.OK);
    }


}
