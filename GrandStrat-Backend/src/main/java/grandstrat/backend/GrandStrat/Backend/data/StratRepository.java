package grandstrat.backend.GrandStrat.Backend.data;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository

public interface StratRepository extends CrudRepository<StratData, Integer> {
    List<StratData> findByCountry(String country);
    boolean existsByCountry(String country);
}