export async function handleResponse(response){
    if(response.ok){
        const t = response.json();
        return t;
    }

    if(response.status === 400){

        const error = await response.text();
        throw new Error(error);
    }

    throw new Error("Somethin went wrong while executing your request");
}

export function handleError(error){
    console.log("API call ended"+error);
    throw error;
}