export const handler = async (event) => {
    const max = 999
    const val = 0
    const response = {
        statusCode: 200,
        body: `The random value (max ${max}) is: ${val}`,
    }
    return response
}
