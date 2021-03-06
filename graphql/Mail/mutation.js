'use strict'

const { MailGestor } = require('../../gestor/MailGestor')
const { Response } = require('../../dto/Response')

module.exports = {
    receiveContactMessage: async ( root, { input }) => {
    	let result
    	const response = new Response()
        try {
            result = await MailGestor.instance.receive(input)
            response.message = 'El correo se envio correctamente'
            response.success = true
        } catch (error) {
            console.error(error.message)
            console.error(error.stack)
            response.message = 'Hubo un error al enviar el correo'
            response.error = true
        }
        return response
    }
}