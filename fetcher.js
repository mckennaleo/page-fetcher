const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
request(`${args[0]}`, (error, response, body) => {
  if (error) {
    console.log('an error occurred');
    return;
  }
  fs.writeFile(args[1], body, function(err) {
    if (err) throw err;
    console.log('Saved!');
  });
  const fileSize = args[0].size;
  console.log(args[0]);
  console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`); // Print the error if one occurred
});
