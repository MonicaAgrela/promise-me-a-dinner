import { useState } from 'react';
import { obtainInstruction } from '../javascript/obtainInstruction.js';
import { reset, setter } from '../javascript/stateChanger.js';

function useSteak() {
	const [steak, setSteak] = useState([]);
	const addItem = setter(setSteak);

	function getSteakInstructions() {
		reset(setSteak);
		const food = 'steak';

		obtainInstruction(
			'steak',
			0,
			(step0) => {
				addItem(step0);
			},
			(error) => console.log(error)
		);

		obtainInstruction(
			'steak',
			1,
			(step1) => {
				addItem(step1);
			},
			(error) => console.log(error)
		);
		obtainInstruction(
			'steak',
			2,
			(step2) => {
				addItem(step2);
			},
			(error) => console.log(error)
		);
		obtainInstruction(
			'steak',
			3,
			(step3) => {
				addItem(step3);
			},
			(error) => console.log(error)
		);
		obtainInstruction(
			'steak',
			4,
			(step4) => {
				addItem(step4);
			},
			(error) => console.log(error)
		);
		obtainInstruction(
			'steak',
			5,
			(step5) => {
				addItem(step5);
			},
			(error) => console.log(error)
		);
		obtainInstruction(
			'steak',
			6,
			(step6) => {
				addItem(step6);
			},
			(error) => console.log(error)
		);
		obtainInstruction(
			'steak',
			7,
			(step7) => {
				addItem(step7);
			},
			(error) => console.log(error)
		);

		console.log("Steak is already!")

		// Don't change the code above this line

		
		
		// Don't change the code below this line
	}
	
	return [steak, getSteakInstructions];
}

export default useSteak;
