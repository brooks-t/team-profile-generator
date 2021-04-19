const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

/* TODO: Having trouble getting the tests to pass once I start creating questions */
function getName() {
    inquirer.prompt(
        {
            name: "name",
            type: "input",
            message: "Enter employee name: "
        }
    ).then(answer => {
        console.log("Here's the object: ", answer);
        const eName = answer.name;
        console.log(`name stored as ${eName}`);
        return eName;
    })
}


module.exports = {
    Employee,
    getName
}