import React from 'react';
import Footer from '../components/Footer/Footer';
import MainContainer from '../components/MainContainer/MainContainer';
import ResultsCard from '../components/MainContainer/ResultsCard/ResultsCard';

const Results = () => {
	return (
		<>
			<MainContainer>
				<ResultsCard />
			</MainContainer>
			<Footer />
		</>
	);
};

export default Results;
