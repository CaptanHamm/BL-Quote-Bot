module.exports = async ( client ) => {
	try {
		/** INIT CLIENT SETTINGS **/
		client.settings = require(client.folders.config+( process.argv[2] || 'bot' )+'.json');
		/** INIT CLIENT HELPERS */
		client.helpers = require(client.folders.utilities+'helpers.js');
	} catch(e) {
		console.error(e);
		throw e;
	}
}
