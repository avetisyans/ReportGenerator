var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reportDB');


var User   = require('./app/models/user');
var Report = require('./app/models/report');

app.use(express.static(__dirname, '/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/*router.get('/customers', function(req, res) {
    res.json(customers);
   // res.json(500, {error: 'An error has occured!' });
});

router.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0, len = customers.length; i < len; ++i) {
        if (customers[i].id === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

router.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0, len = customers.length; i < len; ++i) {
        if (customers[i].orders) {
            for (var k=0, len2 = customers[i].orders.length; k < len2; ++k) {
                orders.push(customers[i].orders[k]);
            }
        }
    }
    res.json(orders);
});

router.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: false };
    for (var i = 0, len = customers.length; i < len; ++i) {
        if (customers[i].id === customerId) {
                customers.splice(i,1);
                data = { status: true };
                break;
        }
    }
    res.json(data);
});*/



router.get('/', function(req, res) {
    console.log("GET EEEEEaaxxx");
    res.json({"message": "Responding from Server.js"});
});

router.get('/reports/:username', function(req, res) {
    var username = req.params.username;
    Report.find({"username": username}, function(err, report) {
        if (err) {
           res.status(404);
        } 
        console.log('report is: ' + report);
        console.log('report.length is: ' + report.length);
        res.json(report);
    });
   // res.json({"message": "Responding from Server.js"});
});

router.get('/users', function(req, res) {
    console.log("GET Users");
    User.find({"username": "FirstUser"}, function(err, user) {
        if (err) {
           return "Errrrrrrrrrrrooooooooorrrr"; 
        } 
        res.json(user);
    });
   // res.json({"message": "Responding from Server.js"});
});

router.post('/reports', function(req, res) {
    User.find({username : "FirstUser"}, function(err, user) {
        if (err) {
            return "EEEroror";
        }
        console.log("user.id is: " + user._id);
        console.log("user.password is: " + user.password);
        console.log("user lenght is " + user.length);

        var report = new Report();
        report.report.To_Do = "To_Do of FirstUser";
        report.Done = "Done of FirstUser";
        report.Skipped = "Skipped of FirstUser";
        report.user_id = user._id;
        report.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({message: "Your Report has been Created"});
        });
    });
});

/*router.post('/us', function(req, res) {
    var user = new User();
    user.username = "SecondUser";
    user.password = "password2";

    user.save(function(err, rep) {
        if (err) {
            res.send(err);
        }
        var report = new Report();
        report.report_body.To_Do = "1 To_Do OF SecondUser";
        report.report_body.Done = "1 Done of SecondUser";
        report.report_body.Skipped = "1 Skipped of SecondUser";
        report.user_id = rep;
        report.username = "SecondUser";
        report.save();

        var report = new Report();
        report.report_body.To_Do = "2 To_Do OF SecondUser";
        report.report_body.Done = "2 Done of SecondUser";
        report.report_body.Skipped = "2 Skipped of SecondUser";
        report.user_id = rep;
        report.username = "SecondUser";
        report.save();

        var report = new Report();
        report.report_body.To_Do = "3 To_Do OF SecondUser";
        report.report_body.Done = "3 Done of SecondUser";
        report.report_body.Skipped = "3 Skipped of SecondUser";
        report.user_id = rep;
        report.username = "SecondUser";
        report.save();

        res.json({message: "User has been Created"});
    });
});*/

router.post('/authenticate', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log("password is: " + password);
    console.log("username is: " + username);
    User.find({"username": username, "password": password}, function(err, user) {
        if (err || user.length == 0) {
            console.log("user is: " + user);
            console.log("user is: " + user.length);

            res.status(400);
        }
        console.log("*******************")
        res.json(user);
    })
});

app.use('/api', router);

/*router.put('/books/:bookId', function(req, res) {
    var bookId = parseInt(req.params.bookId);
    var book = null;
    var bookRank = req.body.rank;

    for (var i = 0, len = books.length; i < len; ++i) {
        if (books[i].id === bookId) {
            books[i].rank = bookRank;
            book = books[i];
        }
    }
    res.json(book);
});*/

app.listen(3000);

console.log('Express is listening on port 3000');

        var customers = [
            {
                id: 1,
                joined: '2000-12-02',
                name: 'Dohn',
                city: 'Los',
                orderTotal: 123.5832,
                orders: [
                    {
                        id:1,
                        product:'Product 1',
                        total: 123.5832
                    }
                ]
            },
            {
                id: 2,
                joined: '1943-04-27',
                name: 'Hohn2',
                city: 'Los2',
                orderTotal: 222.5532,
                orders: [
                    {
                        id: 2,
                        product: 'Product 2',
                        total: 200.5532
                    },
                    {
                        id: 3,
                        product: 'Product 3',
                        total: 22
                    }
                ]
            },
            {
                id: 3,
                joined: '2003-07-15',
                name: 'Gohn3',
                city: 'dos3',
                orderTotal: 33.9992,
                orders: [
                    {
                        id:4,
                        product:'Product 4',
                        total: 33.9992
                    }
                ]
             }];
    