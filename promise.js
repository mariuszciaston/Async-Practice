const p = new Promise((resolve, reject) => {
	const a = 1 + 1;
	if (a === 2) {
		resolve('Success');
	} else {
		reject('Failed');
	}
});

p.then((message) => {
	// 'then' will be called when promise resolves (is succesful)
	console.log(`This is in the then ${message}`);
}).catch((message) => {
	// 'catch' will be called when promise is rejected (failed)
	console.log(`This is in the catch ${message}`);
});
