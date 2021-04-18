import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='row'>	
			<span  class="col-6">Total: £{total}</span>
			<span class="col-5">
				<button class="btn btn-info" type ='button' disabled ={total>1000}>Submit</button>
			</span>
		
			</div>
		
	
			
		
	);
};

export default ExpenseTotal;
