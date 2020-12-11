import {NextApiRequest,NextApiResponse} from 'next'
import DB from '../../../database/db'


const Guitar = async (req, res) => {
    const db = new DB()
    
    const id = req.query.id
    
    const entries = await db.getById(id)
    res.status(200).json(entries)
    
}

export default Guitar