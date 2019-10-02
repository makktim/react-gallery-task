
export const REQUEST_API_DATA = 'REQUEST_API_ITEM';
export const RECEIVE_API_DATA = 'RECEIVE_API_ITEM';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });