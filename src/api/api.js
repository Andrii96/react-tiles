import {handleResponse, handleError} from './apiUtils';
const url = 'http://localhost:3001/apps';

export function getApps(){
    return fetch(url).then(handleResponse).catch(handleError);
}