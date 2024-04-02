import { Client } from "pg";
const client=new Client({
    connectionString:"postgresql://joshihimani2507:G48pSPEjBrhn@ep-fancy-cell-61357429.us-east-2.aws.neon.tech/test?sslmode=require"
});
async function createUserTable(){
await client.connect();
const result=await client.query(`
CREATE TABLE firsttable1 (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`)
console.log(result)
}
// createUserTable()
async function insertData(){
    await client.connect();
    const result=await client.query(`insert into firsttable1(username,email,password) values('himani','himani@gmail.com','123456')`
    )
 console.log(result);
}
insertData();