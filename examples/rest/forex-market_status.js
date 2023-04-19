const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/forex/get_v1_marketstatus_now
rest.reference.marketStatus().then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});