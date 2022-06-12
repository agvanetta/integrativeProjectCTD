package Digitalbooking.accommodations;

import Digitalbooking.accommodations.config.DBConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DigitalBookingAccommodationsApplication {

	public static void main(String[] args) {
		new DBConfig();
		SpringApplication.run(DigitalBookingAccommodationsApplication.class, args);
	}

}
