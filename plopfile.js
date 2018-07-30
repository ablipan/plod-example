module.exports = function (plop) {
  // default generator
  plop.setGenerator('default', {
    description: 'This is a plod example.',
    prompts: [
      {
        type: 'input',
        name: 'greeting',
        message: 'Speak something:',
        default: 'Hello everyone.'
      }
    ],
    actions: [
      {
        type: 'add',
        path: process.cwd() + '/hello.txt',
        force: true,
        templateFile: plop.getPlopfilePath() + '/template/hello.txt'
      }
    ]
  })
}
