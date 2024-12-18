function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

function toPascalCase(str) {
  return str
    .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    })
    .replace(/\s+/g, '');
}

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What is your folder type?',
        choices: ['components', 'pages']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your folder name?'
      }
    ],
    actions: (data) => {
      const folderName =
        data.type === 'pages'
          ? toCamelCase(data.name)
          : toPascalCase(data.name);

      if(data.type === 'pages') {
        return [
          {
            type: 'add',
            path: `../src/app/${folderName}/page.tsx`,
            templateFile: 'templates/page.tsx.hbs'
          }
        ];
      }

      return [
        {
          type: 'add',
          path: `../src/components/${folderName}/index.tsx`,
          templateFile: 'templates/component.tsx.hbs'
        }
      ];
    }
  });
};
