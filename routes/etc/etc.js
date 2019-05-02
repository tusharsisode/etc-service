//Bring in dependencies
var dateFormat = require('dateformat');

//Read the JSON file with ETC Quotes
const etcQuotes = require('../../data/etc.json');

//Route to get ETC Quotes for a given input date
module.exports = (req, res) => {
 var inputDt = req.query.inputDate;
 //Format the date to desired format
 var formattedInputDt = dateFormat(inputDt, "yyyymmdd");
 //Find the ETC quotes for the input date
 var etcQuote = etcQuotes.find (e => e.date === formattedInputDt);
 //Return etc quotes if found
 if (etcQuote) {
   res.status(200).send(etcQuote);
 } else {
   res.status(404).send('Not Found!!');
 }
};