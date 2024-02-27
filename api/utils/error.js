const errorHandler = (statusCode, message = "An error occurred") => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}


export { errorHandler };


