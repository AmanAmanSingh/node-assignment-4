const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.post("/add", (req, res) => {
    console.log(req.body);
    let first_num = req.body.num1;
    let second_num = req.body.num2;
    let result = first_num + second_num;
    if (first_num > 1000000 || second_num > 1000000 || result > 1000000) {
        flag = true
        return res.status(200).json({
            status: "error",
            message: "overflow"
        })
    }
    else if (first_num < -1000000 || second_num < -1000000 || result < -1000000) {
        flag = true;
        return res.status(200).json({
            status: "error",
            message: "underflow"
        })
    }
    else {
        res.status(200).json({
            status: "success",
            message: "the sum of given two numbers",
            sum: result
        });
    }
})
app.post("/sub", (req, res) => {
    let first_num = req.body.num1;
    let second_num = req.body.num2;
    let result = first_num - second_num;
    if (first_num > 1000000 || second_num > 1000000 || result > 1000000) {
        return res.status(200).json({
            status: "error",
            message: "overflow"
        })
    }
    else if (first_num < -1000000 || second_num < -1000000 || result < -1000000) {
        return res.status(200).json({
            status: "error",
            message: "underflow"
        })
    }
    else {
        res.status(200).json({
            status: "success",
            message: "the difference of given two numbers",
            sum: result
        });
    }
})
app.post("/multiply", (req, res) => {
    let first_num = req.body.num1;
    let second_num = req.body.num2;
    let result = first_num * second_num;

    if (first_num > 1000000 || second_num > 1000000 || result > 1000000) {
        return res.status(200).json({
            status: "error",
            message: "overflow"
        })
    }
    else if (first_num < -1000000 || second_num < -1000000 || result < -1000000) {
        return res.status(200).json({
            status: "error",
            message: "underflow"
        })
    }
    else {
        res.status(200).json({
            status: "success",
            message: "the multiply of given two numbers",
            sum: result
        });
    }

})
app.post("/divide", (req, res) => {
    let first_num = req.body.num1;
    let second_num = req.body.num2;
    let result = first_num / second_num;
    if (second_num == 0) {
        res.send({
            status: "failure",
            message: " Cannot divide by zero",
        })
    } else if (first_num == "" || second_num == "" || isNaN(first_num) || isNaN(second_num)) {
        res.send({
            status: "error",
            message: "not valid Data Type",
        })
    }
    else {
        res.send({
            status: "success",
            message: "the divide of given two numbers",
            sum: result
        })
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;