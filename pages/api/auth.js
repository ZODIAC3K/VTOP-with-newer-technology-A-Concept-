import Query from '../../lib/db'

export default async (req, res) =>{
    try {
        const query = 'SELECT * FROM users'

        const allRecords = await Query({query: query,values: []})

        const email = req.body.email;
        const password = req.body.password;

        var isUser = false;
        // var isStudent = false;
        // var isTeacher = false;

        allRecords.forEach( user =>{
            if (user.email === email && user.password == password) {
                isUser = true
                // isStudent = user.student === 1? true : false
                // isTeacher = user.teacher === 1? true : false
            }
        })

        const user = {
            isUser : isUser,
            // isStudent : isStudent,
            // isTeacher : isTeacher
        }

        console.log(user)

        res.statusCode = 200;
        res.json(user);

    } catch (err) {
        console.log(err);
    }
    
}