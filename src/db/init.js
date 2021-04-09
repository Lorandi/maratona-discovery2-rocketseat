const Database = require("./config");



const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`CREATE TABLE profile(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        monthly_budget INT,
        days_per_week INT,
        hours_per_day INT,
        vacation_per_year INT,
        value_hour INT
)`);

    await db.exec(`CREATE TABLE jobs(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        daily_hours INT,
        total_hours INT,
        created_at DATETIME
)`);

//banco de dados está zerado
//para começar com informações, colar conteúdo do dadosIniciais.js
await db.run(`INSERT INTO profile(
    name,
    avatar ,
    monthly_budget,
    days_per_week,
    hours_per_day,
    vacation_per_year,
    value_hour

)VALUES(
    "",
    "",
    0,
    0,
    0,
    0,
    0
);`);


    await db.close();
  },
};

initDb.init();
