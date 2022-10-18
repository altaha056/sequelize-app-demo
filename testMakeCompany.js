const models = require("./models");
const User = models.User;
const Company = models.Company;
const WorkingDay = models.WorkingDay;

Company.create({
  name: "My super company",
})
  .then((newCompany) => {
    // The get() function allows you to recover only the DataValues of the object
    console.log(newCompany.get());
  })
  .catch((err) => {
    console.log("Error while company creation : ", err);
  });

User.bulkCreate([
  {
    email: "john-doe@domain.com",
    firstName: "John",
    lastName: "DOE",
    companyId: 1,
  },
  {
    email: "log_w@domain.com",
    firstName: "Logan",
    lastName: "WOLVERINE",
    companyId: 1,
  },
  {
    email: "john-connor@domain.com",
    firstName: "John",
    lastName: "CONNOR",
    companyId: 1,
  },
])
  .then((newUsers) => {
    console.log(newUsers);
  })
  .catch((err) => {
    console.log("Error while users creation : ", err);
  });