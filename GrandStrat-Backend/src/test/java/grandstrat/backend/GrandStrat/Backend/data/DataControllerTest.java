package grandstrat.backend.GrandStrat.Backend.data;

import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import javax.xml.crypto.Data;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class DataControllerTest {

    @Autowired
    private StratRepository stratRepo;

    @Autowired
    private DataController dataController;

    @Autowired
    private TestRestTemplate restTemplate;

    @LocalServerPort
    private int port;

    @Test
    void allStrats() throws Exception{
        StratData strat = new StratData("TEST_COUNTRY", "Religious",
                                                                "Quantity");
        stratRepo.save(strat);

        assertTrue(this.restTemplate.getForObject("http://localhost:" + port + "/strats",
                String.class).contains("TEST_COUNTRY"));

        for (StratData element : stratRepo.findByCountry("TEST_COUNTRY"))
            stratRepo.deleteById(element.getId());
    }

    @Test
    void newStrat() throws Exception{
        
        JSONObject stratJsonObject = new JSONObject();
        stratJsonObject.put("country", "TEST_COUNTRY");
        stratJsonObject.put("idea1", "Religious");
        stratJsonObject.put("idea2", "Quantity");

        dataController.newStrat(stratJsonObject.toString());

        for (StratData element : stratRepo.findByCountry("TEST_COUNTRY"))
            stratRepo.deleteById(element.getId());
    }
}