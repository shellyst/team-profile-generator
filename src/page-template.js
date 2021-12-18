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
    
    
}

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/styles.css">
    <title>Team Profile Generator</title>
</head>
<body>
    ${contentHTML(team)}
</body>
</html>
    `;
};

//Install Bootstrap for CSS
