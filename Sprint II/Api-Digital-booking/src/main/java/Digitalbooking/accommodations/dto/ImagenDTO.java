package Digitalbooking.accommodations.dto;


import Digitalbooking.accommodations.entities.Producto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ImagenDTO {

    private  Integer id;

    private String title;

    private String url;

    private ProductoDTO producto;
}
