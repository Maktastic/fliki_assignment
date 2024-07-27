
export function successResponse(res, message='success', data = [], statusCode = 200 )  {
    return res.status(statusCode).json({
        message: message,
        data: data,
        statusCode: statusCode
    })
}

export function errorResponse(res, message = 'Internal Server Error', data = [], statusCode = 500 ) {
    return res.status(statusCode).json({
        message: message,
        data: data,
        statusCode: statusCode
    })
}