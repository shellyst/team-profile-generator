function contentHTML(data) {
  function createManager(manager) {
    return `<div class="card mr-1 mt-3">
    <div class="card-header">
    <h2 class="card-title">Manager</h2> 
    <h3 class="card-title bg-primary">${manager.getName()}</h3>
    </div>
    <div class="card-body">
    <p>ID:${manager.getId()}</p>
    <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
    <p>Office Number: ${manager.getOfficeNumber()}</p>
</div>
</div>
        `;
  }

  function createIntern(intern) {
    return `
<div class="card mr-1 mt-3">   
<div class="card-header"> 
<h2 class="card-title">Intern</h2> 
        <h3 class="card-title bg-primary">${intern.getName()}</h3>
        <div class="card-body">
      <p>ID:${intern.getId()}</p>
      <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
      <p>School: ${intern.getSchool()}</p>
      </div>
       </div>
        </div>`;
  }

  function createEngineer(engineer) {
    return `
    <div class="card" width: 18rem">
    <div class="engineer"><h2>Engineer</h2> 
       <h3>${engineer.getName()}</h3>
       <p>ID:${engineer.getId()}</p>
      <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
      <p>Github: [${engineer.getGithub()}](https://github.com/${engineer.getGithub()})</p>
        </div>
        </div>
        </div>`;
  }

  const content = [];
  content.push(
    data
      .filter((item) => item.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );

  content.push(
    data
      .filter((item) => item.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
  );

  content.push(
    data
      .filter((item) => item.getRole() === "Intern")
      .map((intern) => createIntern(intern))
  );
  return content.join("");
}

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/styles.css">
    <title>Team Profile Generator</title>
</head>
<body>
<div class="container-fluid">
<div class="row">
<div class="col-12 mb-3 bg-dark text-white">
<h1 class="text-center">My Team</h1></div>
    </div>
    </div>
    <div class="container">
    <div class="row">
    <div class="col-12 d-flex flex-wrap p-3">
        ${contentHTML(team)}
        </div>
        </div>
</div>
</body>
</html>
    `;
};
