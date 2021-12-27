const router = require('express').Router();
const axios = require('axios');

const {Pokemon, Type} = require('../db');
const getDatos = require('../functions/getDatos');
const getID = require('../functions/getID');
const getNamestypes = require('../functions/getNamestypes');
/* 

router.get('/',async (req,res) => {
    var {name} = req.query;
    if(!name){
        var dbpok = [];
        dbpok = await Pokemon.findAll({
            include:Type
        });
    var pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    let taka = await axios.get(`${pokemons.data.next}`);
    pokemons=[...pokemons.data.results,...taka.data.results];
    pokemons = pokemons.map(e => axios.get(e.url));
    var pok = [];
    let data = await Promise.all(pokemons)
    data.forEach(resp => {
        pok.push({
            ...getDatos(resp),
            types:resp.data.types.map(e => e.type.name)})
        }
    )
    dbpok =dbpok.map(e => {return{...e.dataValues,types:getNamestypes(e.dataValues)}})
    return res.send([...dbpok,...pok]);
}
else{
        let pokemons = await Pokemon.findOne({
            where:{
                name:name
            },
            include:Type
            }
        )
        if(pokemons){
        pokemons = {...pokemons.dataValues,types:getNamestypes(pokemons)}
        return res.send(pokemons);
        }
        try{
            pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            pokemons = getDatos(pokemons);
            return res.send(pokemons)
        }
        catch{
            res.sendStatus(404);
        }
}
})

router.get('/:id',async (req,res) => {
    const {id} = req.params;
        try{
            let pokedata = await Pokemon.findOne({where:{id},include:Type});
            pokedata = {...pokedata.dataValues,types:getNamestypes(pokedata)}
            return res.send(pokedata);
        }
        catch{
            try{
                let poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${parseInt(id)}`);
                poke = getDatos(poke);
               return res.send(poke);
            }
            catch{
                return res.status(404).send('ID not found')
            }
        }
})
 */

module.exports = router;