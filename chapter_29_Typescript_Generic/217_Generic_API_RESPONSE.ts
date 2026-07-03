function wrapResponse<T>(statuCode: number, data: T): { statusCode: number; data: T } {
    return { statusCode: statuCode, data: data }

}

let userResp = wrapResponse<string>(200, "admin");
console.log(userResp);


let flagResp = wrapResponse<boolean>(200, true);
console.log(flagResp);