import mysql from 'mysql2/promise'

export default async function Query({query,value =[]}) {

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'vtop'
    });

    try {
        const [data] = await connection.execute(query,value)
        await connection.end()

        return data;
    } catch (err) {
        throw Error(err);
    }
}