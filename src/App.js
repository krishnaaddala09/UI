import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';


const App = () => {
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>Expenses Tracker</h1>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<div className='col-sm'>
						<ExpenseTotal />
					</div>
			</div>

			<div className='col-sm'>
						<AddExpenseForm />
					</div>
		</AppProvider>
	);
};

export default App;
