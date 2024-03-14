const express = require("express");
const app = express();


const users = [{
    name: 'John',
    kidneys: [{
        healthy : false
    }]
}]

app.use(express.json());

//Users can se how many kidneys they have and there health
app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

//Users can new kidneys
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done!"
    })
})

//Users can replace kidneys, make it healthy
/*app.put("/", function(req, res) {
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true
    }
    res.json({});
})*/

//deletes the unhealthy kidneys
app.delete("/", function(req, res) {
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({})
})

app.listen(3000)