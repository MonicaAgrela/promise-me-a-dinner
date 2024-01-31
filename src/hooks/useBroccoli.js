import { useState } from "react";
import { obtainInstruction } from "../javascript/obtainInstruction.js";
import { reset, setter } from "../javascript/stateChanger.js";

function useBroccoli() {
  const [broccoli, setBroccoli] = useState([]);
  const addItem = setter(setBroccoli)

	async function getBroccoliInstructions() {
		try{
		reset(setBroccoli)
		const food = 'broccoli';
		const pass1 = await 'wash broccoli in cold water';
		const pass2= await 'trim and cut the stalk in half, then finely slice it';
		const pass3= await'fill a pot with water, add a pinch of salt and bring to the boil';
		const pass4= await'once boiling, carefully lower the broccoli into the water';
		const pass5= await'cook for 3 to 4 minutes, or until tender';
		const pass6= await'drain, then leave to steam dry for a minute';
		const pass7= await'enjoy';

        console.log(food)
		console.log(pass1)
		console.log(pass2)
		console.log(pass3)
		console.log(pass4)
		console.log(pass5)
		console.log(pass6)
		console.log(pass7)
		}
		catch(error){
			console.log(error)
		}

		// Don't change the code above this line

		console.log("Broccoli is ready!")

		
		// Don't change the code below this line
	}
	
	

  return [broccoli, getBroccoliInstructions]
}


export default useBroccoli