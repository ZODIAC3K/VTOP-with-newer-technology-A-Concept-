import Query from '../../lib/db'

export default async (req, res) => {
    try {
        const sqlQuery = req.body
        const valueParam = []
        
        const dataRes = await Query({query: sqlQuery,value: valueParam})

        res.status(202).json(dataRes)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({error: err.message})
    }
}
  