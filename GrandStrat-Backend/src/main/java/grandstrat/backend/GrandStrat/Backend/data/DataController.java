package grandstrat.backend.GrandStrat.Backend.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class DataController {
	
	@Autowired
	private StratRepository stratRepo;
	
	@CrossOrigin
	@GetMapping(path="/strats")
	public @ResponseBody Iterable<StratData> allStrats() {
		return stratRepo.findAll();
	}
	
	@CrossOrigin
	@PostMapping(path="/new-strat")
	public String newStrat(@RequestBody String strat) throws JsonMappingException, JsonProcessingException
	{
		ObjectMapper objectMapper = new ObjectMapper();
		
		StratData n = objectMapper.readValue(strat, StratData.class);
		stratRepo.save(n);
		
		return "Saved";
	  }
	
}
