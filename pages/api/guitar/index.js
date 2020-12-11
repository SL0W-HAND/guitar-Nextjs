import {NextApiRequest,NextApiResponse} from 'next'
import DB from '../../../database/db'


const allGuitars = async (req, res) => {
    const db = new DB()
    
    const allEntries = await db.getAll()
    res.status(200).json({data:allEntries,lenght:21})
}

export default allGuitars