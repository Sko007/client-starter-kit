const initialState = {
	list: [],
	isFetched: false
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'USER_FETCHED':
			return { ...state, isFetched: true, list: action.payload };
		default:
			return state;
	}
};
