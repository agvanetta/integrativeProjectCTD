package Digitalbooking.accommodations.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class DBConfig {
    public DBConfig() {
        String url = "jdbc:mysql://" + System.getenv().get("APP_DB_HOST");
        String username = System.getenv().get("APP_DB_USER");
        String password = System.getenv().get("APP_DB_PASS");
        String sql = "CREATE SCHEMA IF NOT EXISTS digitalbooking";

        try (
            Connection conn = DriverManager.getConnection(url, username, password);
            PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.execute();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}