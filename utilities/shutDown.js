module.exports = async ( client ) => {
	try {
		console.log('');
	    console.log('Received kill signal, shutting down gracefully');
	    let errors = [];
			if( errors.length > 0 ) {
	    	console.log(error.join('\n'));
	    	process.exit(1);
	    }
        process.exit(0);
	} catch(e) {
		throw e;
	}
}
