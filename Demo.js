// const simpleGit = require('simple-git');
// const git = simpleGit();

require('simple-git')()
    .init()
    .add('./*')
    .commit("first commit!")
    .addRemote('origin', 'https://github.com/NidhiPrajapati1998/repo.git')
    .push(['-u', 'origin', 'master'], () => console.log('done'));
console.log("hello");