var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    router = express.Router();

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

app.use('/api', router);

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
    