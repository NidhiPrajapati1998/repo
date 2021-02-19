// const simpleGit = require('simple-git');
// const git = simpleGit();

require('simple-git')()
    .init()
    .add('./*')
    .commit("first commit!")
    .addRemote('origin', 'https://gitlab.greylabs.com/GCL_Platform/test-gclJobPlatform.git')
    .push(['-u', 'origin', 'master'], () => console.log('done'));
    
console.log("hello");