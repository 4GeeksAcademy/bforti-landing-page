import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Card from "./card";
import Jumbotron from "./jumbotron"





const Home = () => {
	return (<>
	<div className="p-2">
	<Navbar/>
			<Jumbotron/>
			<div className="d-flex">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
	</div>
			

			
			
			
			</>
		
	);
};

export default Home;
