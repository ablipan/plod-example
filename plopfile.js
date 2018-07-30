module.exports = function (plop) {
  const templatePath =
  // the default generator
  plop.setGenerator('default', {
    description: 'This is a plod example.',
    prompts: [
      {
        type: 'input',
        name: 'greeting',
        message: 'Speak something:',
        validate: function (value) {
          if (value) return true
          return 'Please say something.'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: process.cwd(),
        templateFile: plop.getPlopfilePath() + '/template/hello.txt'
      }
    ]
  })
}
