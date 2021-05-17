const fetch = require('node-fetch')

exports.handler = async (event, context) => {
  if (
    event.queryStringParameters.key !== 'prod_kVjSlgKwhJmhToIcJxrBXkiCONJYc5JWADY3PbEY'

  ) {
    return { statusCode: 403, body: 'Access denied' }
  }
  try {
    await fetch(
      'https://api.github.com/repos/COVID19Tracking/covid-public-api-build/dispatches',
      {
        method: 'post',
        body: JSON.stringify({
          event_type: 'api-build',
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${process.env.CTP_GITHUB_API_BUILD_TOKEN}`,
        },
      },
    ).then(response => {
      return response.text()
    })
    return { statusCode: 200, body: 'Done' }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
