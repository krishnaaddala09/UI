import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const [price, setPrice] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: 1,
			name,
			cost: parseInt(cost),
			price: parseInt(price)
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
		setPrice('')
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='container'>
				<h4>Add Extra  Expenses</h4>
				<div class='col-sm col-lg-3'>
					<label for='name'>Description</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='description'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-3'>
					<label for='cost'>Amount</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='amount'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>

					<div class='col-sm col-lg-3'>
					<label for='cost'>Price</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={price}
						onChange={(event) => setPrice(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'  style={{marginLeft:'170px'}}>
					<button type='submit' class='btn btn-primary'>
						Add
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
