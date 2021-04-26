package grandstrat.backend.GrandStrat.Backend.data;


import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
	@GetMapping(path="/strattest")
	public @ResponseBody Iterable<StratData> getAllStrats() {
	    // This returns a JSON or XML with the users
		System.out.println("View Strats");
		return stratRepo.findAll();
	}
	
	@CrossOrigin
	@PostMapping(path="/posttest") // Map ONLY POST Requests
	//public @ResponseBody String addNewStrat (@RequestParam String country,
	//		 @RequestParam String idea1, @RequestParam String idea2)
	public String addNewStrat (@RequestBody String strat) throws JsonMappingException, JsonProcessingException
	{
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		
		System.out.println("Start");
		System.out.println(strat);
		
		
		ObjectMapper objectMapper = new ObjectMapper();
		
		StratData n = objectMapper.readValue(strat, StratData.class);
		System.out.println(n.getCountry());
		stratRepo.save(n);
		System.out.println("Finish");

		
		
		return "Saved";
	  }
	
}
