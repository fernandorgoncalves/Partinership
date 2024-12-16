import db from '../configs/database.js'

db.run(`
    CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password  TEXT NOT NULL
    )     
`)

function CreateUserRepository(newUser){
    return new Promise((resolve, reject) =>{
        const[username, email, password] = newUser
        db.run(
            `
            INSERT INTO users (username, email, password) 
            VALUES (?,?,?) 
            `,
            {username, email, password},
            (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve({id: this.lastID, ...newUser})
                }
            }
        
        )
    })

}

function findUserByEmailRepository(email){
    return new Promise((resolve, reject) =>{
        db.get(
            `
            SELECT id, username, email 
            FROM users 
            WHERE email = ?
            `, [email],
            (err, row) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(row)
                }
            }
        )
    })
}
export default {
    CreateUserRepository,
    findUserByEmailRepository,
};
