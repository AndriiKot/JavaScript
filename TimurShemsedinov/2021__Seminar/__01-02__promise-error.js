'use strict'

const fn = (a, b) => {
  return new Promise((res, rej) => {
  	if (typeof a !== 'number') rej(new Error('Number'));
  	if (typeof b !== 'number') rej(new Error('Number'));
  	res(a + b);
  });
};

(async () => {
  try {
  	const res = await fn(1, '2'); // error arg
	  console.log({ res });
	} catch (err) {
	  console.log(err.stack);
	}	
})();
