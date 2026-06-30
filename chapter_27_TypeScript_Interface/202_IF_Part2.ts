interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number;
}


let response1: APIResponse = {
    body: 'Hi',
};


let response2: APIResponse = {
    body: 'Hello',
    headers: {},
    responseTime: 400

}