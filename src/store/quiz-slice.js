import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	countriesData: [],
	randCountries: [],
	randQuestion: '',
	questionCountry: {},
	point: 0,
	isGameOver: false,
	isCorrectAnswer: null,
	status: null,
};
export const getCountries = createAsyncThunk(
	'quiz/getCountries',
	async (dispatch, getState) => {
		return await fetch(
			'https://restcountries.com/v3.1/all?fields=name,capital,flag'
		)
			.then((res) => res.json())
			.catch((e) => e);
	}
);

export const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		setCountriesData(state, action) {
			state.countriesData = action.payload;
		},
		setRandCountries(state, action) {
			state.randCountries = action.payload;
		},
		setIsCorrectAnswer(state, action) {
			state.isCorrectAnswer = action.payload;
		},
		setRandQuestion(state, action) {
			state.randQuestion = action.payload;
		},
		setPoint(state) {
			state.point++;
		},
		resetPoint(state) {
			state.point = 0;
		},
		setGameOver(state, action) {
			state.isGameOver = action.payload;
		},
	},
	extraReducers: {
		[getCountries.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getCountries.fulfilled]: (state, action) => {
			state.status = 'success';
			const transformedData = action.payload.map((c) => {
				return { ...c, name: c.name.common };
			});
			state.countriesData = transformedData;
			state.randCountries = getRandomCountries(transformedData, 250);
			//state.questionCountry = getRandomCountries(state.randCountries, 4);
			state.randQuestion = getRandQuestion(questions);
		},
		[getCountries.rejected]: (state, action) => {
			state.status = 'failed';
		},
	},
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;

export const getRandomCountry = (countriesData, total) => {
	return countriesData[Math.floor(Math.random() * total)];
};

export const getRandomCountries = (countriesData) => {
	const countries = [];
	for (let i = 0; i < 4; i++) {
		const country = getRandomCountry(countriesData, 250);
		countries.push(country);
	}
	return countries;
};

export const questions = {
	capital: 'is the capital of',
	flag: 'Which country does this flag belong to?',
};

export const getRandQuestion = (questions) => {
	const keys = Object.keys(questions);
	return questions[keys[Math.floor(Math.random() * keys.length)]];
};

/* export const getCountriesData = () => {
	return async (dispatch) => {
		dispatch(uiActions.toggleIsLoading());

		const fetchData = async () => {
			const response = await fetch(
				'https://restcountries.com/v3.1/all?fields=name,capital,flag'
			);
			if (!response.ok) {
				throw new Error('Can not get data from server');
			}
			const data = await response.json();
			return data || {};
		};

		try {
			const countriesData = await fetchData();
			const common = countriesData.name || {};
			const transformedCountriesData = {
				...countriesData,
				common,
			};
			dispatch(quizActions.setCountriesData(transformedCountriesData));
			const country = getRandomCountry(transformedCountriesData);
			dispatch(quizActions.setQuestionCountry(country));
			dispatch(uiActions.toggleIsLoading());
			console.log(transformedCountriesData);
		} catch (e) {
			console.log(e);
			dispatch(uiActions.toggleIsLoading());
		}
	};
}; */
