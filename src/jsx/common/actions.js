import { AJAX_ERROR, FETCHED_DONE, TOGGLE_BUDGET } from './action-types';

export function toggleBudget(payload) {
    return { type: TOGGLE_BUDGET, payload }
};

export function throwAjaxError(payload) {
    return { type: AJAX_ERROR, payload }
};

export function fetchedDone(payload) {
    return { type: FETCHED_DONE, payload}
};