import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Results from './routes/Results';
import { getCountries } from './store/quiz-slice';
import { useDispatch } from 'react-redux';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCountries());
	}, [dispatch]);

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/results' element={<Results />} />
			</Routes>
		</div>
	);
};

export default App;
