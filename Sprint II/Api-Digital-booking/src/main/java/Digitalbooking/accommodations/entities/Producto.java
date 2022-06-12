package Digitalbooking.accommodations.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Objects;
import java.util.Set;


@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;

    @Pattern(regexp ="^[^\\s].*",message = "El nombre no puede comenzar con un carácter no válido")
    @NotEmpty(message = "El producto tiene que contener un nombre")
    @Size(min = 1,max = 50,message = "El nombre del producto no puede contener menos de un carácter y más de cincuenta")
    @Column(name = "nombre")
    private  String name;

    @Pattern(regexp ="^[^\\s].*",message = "La descripción no puede comenzar con un carácter no válido")
    @NotEmpty(message = "El producto tiene que contener una descripción")
    @Size(min = 20,max = 500,message = "La descripción no puede contener menos de veinte caracteres y más de quinientos")
    @Column(name = "descripcion",length = 500)
    private String description;

    @ManyToOne(fetch = FetchType.EAGER,cascade = {CascadeType.MERGE, CascadeType.REMOVE})
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;

    @OneToMany(mappedBy = "producto",fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Imagen> imagen;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "caracteristica_id", referencedColumnName = "id")
    private Caracteristica caracteristica;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "ciudad_id", referencedColumnName = "id",nullable = false)
    private Ciudad ciudad;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Producto producto = (Producto) o;
        return Objects.equals(id, producto.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
