package grandstrat.backend.GrandStrat.Backend.data;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class DataControllerTest {

    @Autowired
    private StratRepository stratRepo;

    @Test
    void allStrats() throws Exception{
        StratData strat = new StratData("TEST_COUNTRY", "Religious",
                                                                "Quantity");
        stratRepo.save(strat);

        assertTrue(stratRepo.existsByCountry("TEST_COUNTRY"));

        for (StratData element : stratRepo.findByCountry("TEST_COUNTRY"))
            stratRepo.deleteById(element.getId());
    }
}