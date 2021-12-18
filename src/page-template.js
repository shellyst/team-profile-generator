function contentHTML(data) {
  function createManager(manager) {
    return `
    <div class="manager">  
    ${manager.getName()}
</div>
        `;
  }

  const content = [];
  content.push(
    data
      .filter((item) => item.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );

  function createIntern(intern) {
    return `
        <div class="intern">
        ${intern.getName()}
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
        <div class="engineer">
        ${engineer.getName()}
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

//Install Bootstrap for CSS
