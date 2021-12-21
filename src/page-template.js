function contentHTML(data) {
  function createManager(manager) {
    return `<div class="card">
    <div class="manager"><h2>Manager</h2> 
    <h3>${manager.getName()}</h3>
    <p>ID:${manager.getID()}</p>
    <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
    <p>Office Number: ${manager.getOfficeNumber()}</p>
</div>
</div>
        `;
  }

  const managerContent = [];
  managerContent.push(
    data
      .filter((item) => item.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );

  function createIntern(intern) {
    return `
    <div class="card">
    <div class="intern"><h2>Intern</h2> 
        <h3>${intern.getName()}</h3>
      <p>ID:${intern.getID()}</p>
      <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
      <p>School: ${intern.getSchool()}</p>
      </div>
       </div>
        </div>`;
  }

  const info = [];
  info.push(
    data
      .filter((item) => item.getRole() === "Intern")
      .map((intern) => createIntern(intern))
  );

  function createEngineer(engineer) {
    return `
    <div class="card">
    <div class="engineer"><h2>Engineer</h2> 
       <h3>${engineer.getName()}</h3>
       <p>ID:${engineer.getID()}</p>
      <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
      <p>Github: [${engineer.getGitHub()}](https://github.com/${engineer.getGitHubt()})
        </div>
        </div>
        </div>`;
  }

  const morecontent = [];
  morecontent.push(
    data
      .filter((item) => item.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
  );
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
<div class="containter-fluid">
<div class="row">
<h1 class="text-center">My Team</h1>
    ${contentHTML(team)}
    </div>
    </div>
</body>
</html>
    `;
};
