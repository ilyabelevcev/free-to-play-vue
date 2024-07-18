import axios from 'axios';
import store from '@/store';

export const getAllGames = async (platform, category, sortBy) => {
	const api = store.state.api;
	const response = await axios.get(api.url + 'games', {
		params: {
			platform: platform,
			category: category,
			'sort-by': sortBy
		},
		headers: {
			'X-RapidAPI-Key': api.key,
			'X-RapidAPI-Host': api.host
		}
	});

	return response;
};

export const getCurrentGame = async (id) => {
	const api = store.state.api;
	const response = await axios.get(api.url + 'game', {
		params: {
			id: id
		},
		headers: {
			'X-RapidAPI-Key': api.key,
			'X-RapidAPI-Host': api.host
		}
	});

	return response;
};
