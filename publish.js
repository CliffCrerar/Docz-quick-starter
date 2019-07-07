/**
 * @ Author: Cliff Crerar
 * @ Create Time: 2019-07-06 13:46:42
 * @ Modified by: Your name
 * @ Modified time: 2019-07-07 16:01:12
 * @ Description: publishes package and pushes the project to master and prod build to gh-pages brach
 */

// use strict
const ut = require('util');
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const ghPages = require('gh-pages');
const os = require('os');
var gitOpsCommitMsg = 'auto-commit-on-publish';
var gitOpsFile;

switch (os.platform()) {
    case 'darwin':
        gitOpsFile = path.join(__dirname, 'git-scr/os-commit-push.sh');
        break;
    case 'linux??':
        gitOpsFile = path.join(__dirname, `git-scr/<filename for linus>`); // error
        break;
    case 'win32??':
        gitOpsFile = path.join(__dirname, `git-scr/<filename for windows>`); // error
        break;
};

console.log('gitOpsFile: ', gitOpsFile);

// Decision 
//cp.execSync('npm', ['run', 'build']);
cp.execSync(`${gitOpsFile} auto-commit-on-publish`);
console.log(require('dotenv').config());

const publishOptions = {
    repo: require('./package.json').repository.url.split('+')[1],
    remote: 'upstream',
    message: 'Auto-generated commit',
    user: {
        name: require('dotenv').config().DOCZ_GITUSERNAME,
        email: require('dotenv').config().DOCZ_GITUSEREMAIL
    }
}
console.log('publishOptions: ', publishOptions);

function onDeployTrue(err) {
    err && console.error('ERROR: ', err);
    ut.log('Deploy is true');
    // const cmd = cp.spawn('np', {
    //     cwd: process.cwd(),
    //     detached: false,
    //     stdio: 'inherit'
    // });
    // console.log('cmd: ', cmd);
    // return cmd;
}

ghPages.publish('dist', publishOptions, onDeployTrue());