const Team = require("../models/team"); 


exports.createTeam = (req, res, next) => {
    const {teamName, teamCode, logoUrl} = req.body;

    //if the field is empty
    if(!teamName || !teamCode) {
        return res.status(400).json({msg: "All fields are required "})
    }else{
        if(req.file){
            logoUrl = req.file.path;
        }
    
    Team.create({
        teamName, teamCode, logoUrl
    })
    .then(team => {
        res.json(team)
    })
    .catch(err => res.json({msg: "Team creation failed", err}))
    }
}

//view all team
exports.getAllTeam = (req, res, next) => {
        Team.findAll()
            .then(team => {
                res.json(team)
            })
            .catch(err => {
                res.json({msg : "Error occured"})
            })
};

//deleting a team
exports.deleteTeam = (req, res, next) => {
    
    }
