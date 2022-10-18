const models = require("./models");
const User = models.User;
const Company = models.Company;
const WorkingDay = models.WorkingDay;

// 1:1
// Get the company linked to a given User
User.findOne({
  where: { email: "john-connor@domain.com" },
  include: "company",
})
  .then((findedUser) => {
    // Get the User with Company datas included
    console.log(findedUser);
    // Get the company record only
    // console.log(findedUser.company)
  })
  .catch((err) => {
    console.log("Error while find user : ", err);
  });

// 1:N
// Get the employees for a given company
Company.findByPk(1, { include: ["employes"] })
  .then((company) => {
    // Get the Company with Users (employes) datas included
    console.log(company);
    // Get the Users (employes) records only
    // console.log(company.get().employes)
  })
  .catch((err) => {
    console.log("Error while find company : ", err);
  });
