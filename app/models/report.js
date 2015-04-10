var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var ReportSchema = new Schema({
	user_id: {type: Schema.Types.ObjectId, ref: 'User'},
	username: String,
	report_body: {
		"To_Do"	  : String,
		"Done" 	  : String,
		"Skipped" : String
	}
});

module.exports = mongoose.model('Report', ReportSchema);