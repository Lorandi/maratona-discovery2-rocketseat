const Profile = require("../model/Profile");

module.exports = {
    remainigDays(job) {
        //calculo de tempo restante
        const reaminingDays = (job["total-hours"] / job["daily-hours"]).toFixed();

        const createdDate = new Date(job.created_at);
        const dueDay = createdDate.getDate() + Number(reaminingDays);
        const dueDateInMs = createdDate.setDate(dueDay);

        const timeDiffInMs = dueDateInMs - Date.now();

        //transformar Milisegundos em dias
        const dayInMs = 1000 * 60 * 60 * 24;
        const dayDiff = Math.floor(timeDiffInMs / dayInMs);

        //restam x dias
        return dayDiff;
    },
    calculateBudget: (job,valueHour) => Profile.get()["value-hour"] * job["total-hours"]
}