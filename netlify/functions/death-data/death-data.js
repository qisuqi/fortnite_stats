const createRoute = require('./create')
const readAllRoute = require('./read-all')

const handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '')
  const segments = path.split('/').filter(Boolean)

  switch (event.httpMethod) {
    case 'GET':
      // e.g. GET /.netlify/functions/death-data
      if (segments.length === 0) {
        return readAllRoute.handler(event, context)
      }
      return {
        statusCode: 500,
        body:
          'too many segments in GET request, must be /.netlify/functions/death-data',
      }

    case 'POST':
      // e.g. POST /.netlify/functions/death-data with a body of key value pair objects, NOT strings
      return createRoute.handler(event, context)

    default:
      return {
        statusCode: 500,
        body: 'unrecognized HTTP Method, must be one of GET/POST',
      }
  }
}

module.exports = { handler }
