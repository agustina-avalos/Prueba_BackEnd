import {db} from "../db.js"
export const getStationByID = async(req,res)=>{
    const cre_id = req.params.cre_id;
    const parametroCodificado = encodeURIComponent(cre_id);

    try{
        const [name] = await db.query('SELECT NAME FROM stations WHERE cre_id = ?', [parametroCodificado]);
        const [distancia] =  await db.query('SELECT DISTANCE FROM stations_competitors WHERE cre_id = ?', [parametroCodificado]);
        const [price] = await db.query('SELECT value FROM prices WHERE cre_id = ?', [parametroCodificado]);
        const [brand] = await db.query('SELECT id_brand FROM stations_brands WHERE cre_id = ?', [parametroCodificado]);
        

        res.json({name:name[0], distancia:distancia[0], price:price[0], brand: brand[0]});
    }catch(error){
        console.log(error)
    }
}
   