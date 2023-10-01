import {db} from "../db.js"
export const getStationByID = async(req,res)=>{
    const cre_id = req.params.cre_id;

    try{
        const [name] = await db.query('SELECT NAME FROM stations WHERE cre_id = ?', [cre_id]);
        const [distancia] =  await db.query('SELECT DISTANCE FROM stations_competitors WHERE cre_id = ?', [cre_id]);
        const [price] = await db.query('SELECT value FROM prices WHERE cre_id = ?', [cre_id]);
        const [brand] = await db.query('SELECT id_brand FROM stations_brands WHERE cre_id = ?', [cre_id]);
        

        res.json({name, distancia, price, brand});
    }catch(error){
        console.log(error)
    }
}
        