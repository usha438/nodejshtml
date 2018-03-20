module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello CCBC " + req.body.fname +req.body.lname
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};
