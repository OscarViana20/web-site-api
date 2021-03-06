class Response {
    message = null
    success = false
    error = false
    data = null

    constructor (data = null, success = false, error = false, message = null) {
        this.data = data
        this.success = success
        this.error = error
        this.message = message
    }
}

module.exports = {
    Response
}