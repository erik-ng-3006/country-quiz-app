import React from 'react';
import Footer from '../components/Footer/Footer';
import MainContainer from '../components/MainContainer/MainContainer';
import QuizCard from '../components/MainContainer/QuizCard/QuizCard';

const Home = () => {
	return (
		<>
			<MainContainer>
				<QuizCard />
			</MainContainer>
			<Footer />
		</>
	);
};

export default Home;
