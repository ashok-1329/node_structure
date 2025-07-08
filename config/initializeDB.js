const db = require('./db');

async function initializeDB() {
    try {
        // Step 1: Create the table if it doesn't exist (with minimal base columns)
        await db.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        //console.log('✅ Users table checked/created successfully.');

        // Step 2: Define columns you want to ensure exist (column name + SQL definition)
        const columnsToCheck = [
            { name: 'phone', definition: 'VARCHAR(20) NULL AFTER email' },
            { name: 'age', definition: 'INT NULL AFTER phone' },
            { name: 'address', definition: 'VARCHAR(255) NULL AFTER age' },
        ];

        // Step 3: Loop through columns and add any missing ones
        for (const column of columnsToCheck) {
            const [result] = await db.query(`SHOW COLUMNS FROM users LIKE ?`, [column.name]);
            if (result.length === 0) {
                await db.query(`ALTER TABLE users ADD COLUMN ${column.name} ${column.definition}`);
                console.log(`✅ Added column '${column.name}' to users table`);
            } else {
                //console.log(`ℹ️ Column '${column.name}' already exists`);
            }
        }

    } catch (error) {
        console.error('❌ Error during DB initialization:', error);
    }
}

module.exports = initializeDB;
