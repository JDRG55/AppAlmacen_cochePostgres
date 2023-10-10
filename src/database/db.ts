const Sequelize = require('sequelize');

export const database = new Sequelize('biblioteca2023', 'postgres', '12345678', {
    host: 'localhost',
    dialect: 'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });


async function generateDb() {
    await database.sync({ force: false })
    console.log('Base de datos y tablas creada');
}

generateDb();
