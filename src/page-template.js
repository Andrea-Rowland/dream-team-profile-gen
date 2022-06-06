function generateTeam (team){
    function generateManager(manager){
        return`<div class="card employee-card column is-3">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`;
    }

    function generateEngineer (engineer) {
        return `<div class="card employee-card column is-3">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>`;
    }

    function generateIntern (intern) {
        return `<div class="card employee-card column is-3">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`;
    }

    const html = [];

    html.push(team.filter(emp => emp.getRole() === "Manager").map(manager => generateManager(manager)));

    html.push(team.filter(emp => emp.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(""));

    html.push(team.filter(emp => emp.getRole() === "Intern").map(intern => generateIntern(intern)).join(""));

    return html.join("");

 }





module.exports = team => {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
        <title>Team Generator</title>
    </head>
    <body>
    <section class="hero is-danger is medium">
        <div class="hero-body">
            <p class="title">
                Dream Team
            </p>    
        </div>
    </section>
    <div class = "columns">
        ${generateTeam(team)}
        </div>
    </body>
    </html>`;
};