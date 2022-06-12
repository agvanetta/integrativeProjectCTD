package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICiudadRepository extends JpaRepository<Ciudad,Integer> {
}
