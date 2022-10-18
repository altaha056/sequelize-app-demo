const models = require("./models");
const User = models.User;
const Company = models.Company;
const WorkingDay = models.WorkingDay;

let currentDate = new Date();

WorkingDay.bulkCreate([
  {
    weekDay: "Monday",
    workingDate: currentDate,
    isWorking: true,
  },
  {
    weekDay: "Tuesday",
    workingDate: currentDate,
    isWorking: true,
  },
  {
    weekDay: "Wednesday",
    workingDate: currentDate,
    isWorking: false,
  },
])
  .then((workingDays) => {
    User.findAll({ where: { id: [1, 2, 3] }, include: ["days"] })
      .then((users) => {
        // For user 1, 2 and 3 set the sames workingDays
        users.forEach((user) => {
          user
            .setDays(workingDays) // workingDays is an array (one user hasMany workingDays)
            .then((joinedUsersWorkingDays) => {
              console.log(joinedUsersWorkingDays);
            })
            .catch((err) =>
              console.log("Error while joining Users and WorkingDays : ", err)
            );
        });
      })
      .catch((err) => console.log("Error while Users search : ", err));
  })
  .catch((err) => console.log("Error while WorkingDay creation : ", err));
