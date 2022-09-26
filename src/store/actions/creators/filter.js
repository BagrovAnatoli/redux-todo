import {  TOGGLE_FILTER, FILTER_YES, FILTER_NO, FILTER_ALL } from "../types/filter";

export const toggleFilter = () => ({
    type: TOGGLE_FILTER,
});

export const filterYes = () => ({
    type: FILTER_YES,
});

export const filterNo = () => ({
    type: FILTER_NO,
});

export const filterAll = () => ({
    type: FILTER_ALL,
});