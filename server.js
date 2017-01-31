// link to  express
let connect = require('connect');
let url = require('url');
let accounting = require('accounting');

// create a new connect object
let app = connect();

let lab2 = function(req, res, next) {

  // get the full query
  let queryString = url.parse(req.url, true).query;

  // get the method
  let method = queryString.method;

  // get the numbers
  let x = queryString.x;
  let y = queryString.y;
  let result = 0;

  // calculations
  if (method == 'add'){
  	result = parseFloat(x) + parseFloat(y);
  }
  else if (method == 'subtract'){
  	result = parseFloat(x) - parseFloat(y);
  }
  else if (method == 'divide'){
  	result = parseFloat(x) / parseFloat(y);
  }
  else if (method == 'multiply'){
  	result = parseFloat(x) * parseFloat(y);
  }
  else{
  	result = "Please use a proper method."
  }

  // displaying the result
  res.end('<h1>Calculator</h1>' +
  'Method: ' + method + '<br />' +
  'x: ' + accounting.formatNumber(x) + '<br />' +
  'y: ' + accounting.formatNumber(y) + '<br />' +
  'Result: ' + accounting.formatNumber(result));

};


 // map the url's to the correct virtual pages
 app.use('/lab2', lab2);

 // start the connect http server
 let port = process.env.PORT || 3000;
 app.listen(port);
 console.log('Connect server running on port 3000');
