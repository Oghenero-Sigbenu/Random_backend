const Fixtures = require("../models/fixtures");

//creating fixtures
exports.createFixtures = (req,res,next) => {
    const {Group_A, Group_B, Staduim, Group_A_Score, Group_B_Score, Match_date, date_created } = req.body;
    const userId  = req.params.id;

    if( !Group_A || !Group_B || !Staduim || !Group_A_Score || !Group_B_Score || !Match_date || !date_created) {
        res.status(400).json({msg: "All fields are required"})
    }
    //find user with this id
    // User.findByPk(userId)
    // .then(user => {
        Fixtures.create({ Group_A, Group_B, Staduim, Group_A_Score, Group_B_Score, Match_date, date_created})
        .then(fixture => {
            res.json(fixture)
        })
        .catch(err => res.json({msg: "Error occured while creating fixture"}))
    // })
    // .catch(err => res.status(500).json({msg: "Error occured while creating fixture"}))

};

//editing a fixtures
exports.editFixtures = (req, res, next) => {
    const fixtureId =  req.params.id;
    Fixtures.findByIdAndUpdate(fixtureId, {new: true}) 
    .then(fixture => {
        if(!fixture ){
            return res.status(404).json({
                message: "not found"
            })
        }
        res.send(fixture)
    })
     
}

//delete fixtures
exports.deleteFixtures = (req, res, next) => {
    const fixtureId =  req.params.id;
    Fixture.findByPk(fixtureId) 
        .then(fixture => {
            fixture.destroy()
            .then(() =>{
                res.json({success: true});
            })
            .catch(err => res.json({ success: false }));
        })
        .catch(err => {
            res.json({ success: false, message: "This fixture doesnt exists" })

        })
}

//View all fixtures
exports.getAllFixtures = (req, res, next) => {
    Fixture.findAll()
        .then(fixture => {
            res.json(fixture)
        })
        .catch(err => res.json({ msg: err.message || "Error occured" }))
}