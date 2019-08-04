import { AJAX_ERROR, FETCHED_DONE, TOGGLE_BUDGET } from './action-types';

const initialState = {
    errors: [],
    fetchedUrls: [],
    budgetOn: false
};

function MainReducer(state = initialState, action) {
    switch(action.type) {
        case AJAX_ERROR:
            let { errors } = state, 
                newErrors = [];
            newErrors = errors.map((error) => error);
            newErrors.push(action.error);
            return Object.assign({}, state, { errors: newErrors });
        case FETCHED_DONE:
            let { fetchedUrls } = state,
                newFUs = [];
            newFUs = fetchedUrls.map((fu) => fu);
            newFUs.push(action.fetchResult);
            return Object.assign({}, state, { fetchedUrls: newFUs });
        case TOGGLE_BUDGET:
            let { budgetOn } = state;
            return Object.assign({}, state, { budgetOn: !budgetOn });
        default:
            return state;
    }
};

export default MainReducer;