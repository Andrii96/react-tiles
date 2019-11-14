import {handleResponse, handleError} from './apiUtils';
const url = 'http://localhost:3001/apps/';

export function getApps(){
    return fetch(url).then(handleResponse).catch(handleError);
}

export function saveTile(tile){
    return fetch(url+(tile.id || ""),{
        method:tile.id ? "PUT" : "POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(tile)
    })
    .then(handleResponse)
    .catch(handleError);
}
