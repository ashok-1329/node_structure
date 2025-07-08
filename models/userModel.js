const db = require('../config/db');

// Get all users
async function getAllUsers() {
    const [rows] = await db.query('SELECT * FROM users ORDER BY id DESC');
    return rows;
}

// Get a user by ID
async function getUserById(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
}

// Create a new user
async function createUser(user) {
    const { name, email, phone, age, address } = user;
    const [result] = await db.query(
        'INSERT INTO users (name, email, phone, age, address) VALUES (?, ?, ?, ?, ?)',
        [name, email, phone, age, address]
    );
    return result.insertId;
}

// Update a user by ID
async function updateUser(id, user) {
    const { name, email, phone, age, address } = user;
    const [result] = await db.query(
        'UPDATE users SET name = ?, email = ?, phone = ?, age = ?, address = ? WHERE id = ?',
        [name, email, phone, age, address, id]
    );
    return result.affectedRows;
}

// Delete a user by ID
async function deleteUser(id) {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
