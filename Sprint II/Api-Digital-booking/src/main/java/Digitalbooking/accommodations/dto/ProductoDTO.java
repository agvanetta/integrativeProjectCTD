package Digitalbooking.accommodations.dto;


import Digitalbooking.accommodations.entities.Categoria;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ProductoDTO {

    private  Integer id;

    private  String name;

    private String description;

    private CategoriaDTO categoria;

    private CaracteristicaDTO caracteristica;

    private CiudadDTO ciudad;
}
