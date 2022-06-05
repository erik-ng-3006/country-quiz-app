import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import MainContainer from '../components/MainContainer/MainContainer';
import QuizCard from '../components/MainContainer/QuizCard/QuizCard';
import LoadingRoller from '../components/UI/LoadingRoller';

const Home = () => {
	const status = useSelector((state) => state.quiz.status);
	let content;
	if (status === 'loading') {
		content = <LoadingRoller />;
	} else {
		content = <QuizCard />;
	}

	return (
		<>
			<MainContainer>{content}</MainContainer>
			<Footer />
		</>
	);
};

export default Home;
