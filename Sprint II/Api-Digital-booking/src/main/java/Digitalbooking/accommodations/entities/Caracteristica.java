package Digitalbooking.accommodations.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "caracteristicas")
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "cocina")
    private Boolean kitchen;

    @Column(name = "televisor")
    private Boolean tv;

    @Column(name = "aire_acondicionado")
    private Boolean airConditioning;

    @Column(name = "apto_mascotas")
    private Boolean petsAllowed;

    @Column(name = "estacionamiento_gratuito")
    private Boolean freeParking;

    @Column(name = "pileta")
    private Boolean pool;

    @Column(name = "wifi")
    private Boolean wifi;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Caracteristica that = (Caracteristica) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
