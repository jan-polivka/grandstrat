package grandstrat.backend.GrandStrat.Backend.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class StratData {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)	
	private int id;
	
	private String country;
	private String idea1;
	private String idea2;

	public StratData() {
	}

	public StratData(String country, String idea1, String idea2) {
		this.country = country;
		this.idea1 = idea1;
		this.idea2 = idea2;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}

	public String getIdea1() {
		return idea1;
	}

	public void setIdea1(String idea1) {
		this.idea1 = idea1;
	}

	public String getIdea2() {
		return idea2;
	}

	public void setIdea2(String idea2) {
		this.idea2 = idea2;
	}
}
