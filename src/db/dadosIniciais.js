//dados para colocar no init.js para iniciar o banco de dados com infos

await db.run(`INSERT INTO profile(
    name,
    avatar ,
    monthly_budget,
    days_per_week,
    hours_per_day,
    vacation_per_year,
    value_hour

)VALUES(
    "Rodrigo",
    "https://github.com/lorandi.png",
    3000,
    5,
    5,
    4,
    70
);`);

await db.run(`INSERT INTO jobs(
    name,
    daily_hours,
    total_hours,
    created_at
)VALUES(
    "Pizzaria Guloso",
    2,
    1,
    1617514376018
);`);

await db.run(`INSERT INTO jobs(
    name,
    daily_hours,
    total_hours,
    created_at
)VALUES(
    "OneTwo Projects",
    3,
    47,
    1617514376018
);`);