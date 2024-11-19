import pool from "../config/connect";
import bcrypt from "bcrypt";

const getAllUsers = async () => {
    const [rows] = await pool.execute('SELECT  fullname, gender, born, address, phone, email FROM user');
    return rows;
}


const inserUserAD = async (email, password,) => {
    const [row, feilds] = await pool.execute('INSERT INTO user(email, password) VALUES(?,?)', [email, password]);
}

export {
    getAllUsers,
    inserUserAD,
}      