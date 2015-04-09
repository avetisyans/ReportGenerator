var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var ReportSchema = new Schema({
	username: String,
	report: {
		"To_Do"	  : String,
		"Done" 	  : String,
		"Skipped" : String
	}
});

module.exports = mongoose.model('Report', ReportSchema);