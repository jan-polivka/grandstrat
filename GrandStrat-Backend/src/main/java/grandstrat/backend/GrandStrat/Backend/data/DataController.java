package grandstrat.backend.GrandStrat.Backend.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Optional;

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

	@CrossOrigin
	@DeleteMapping(path="/strat-deletion")
	public String stratDeletion(@RequestBody int strat_id){
		stratRepo.deleteById(strat_id);

		return "Deleted";
	  }

	@CrossOrigin
	@PutMapping(path="strat-change/{id}")
	public String stratChange(@RequestBody String strat, @PathVariable int id) throws JsonProcessingException {
		ObjectMapper objectMapper = new ObjectMapper();

		StratData newStrat = objectMapper.readValue(strat, StratData.class);

		Optional<StratData> chosen_strat = stratRepo.findById(id);
		chosen_strat.get().setCountry(newStrat.getCountry());
		stratRepo.save(chosen_strat.get()); //does this do, what I think it does?

		return "Changed";
	}

	
}
