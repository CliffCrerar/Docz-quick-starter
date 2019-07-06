/**
 * @ Author: Cliff Crerar
 * @ Create Time: 2019-07-06 13:46:42
 * @ Modified by: Your name
 * @ Modified time: 2019-07-06 19:37:38
 * @ Description: publishes package and pushes the project to master and prod build to gh-pages brach
 */

// use strict
const ut = require('util');
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const ghPages = require('gh-pages');
const release = false;

cp.execSync(path.join(__dirname, './git-scr/commit-push.sh auto-commit-on-publish'));

console.log(require('dotenv').config());
/*
publishOptions = {
    repo: require('./package.json').repository.url.split('+')[1],
    remote: 'upstream',
    message: 'Auto-generated commit',
    user: {
        name: require('dotenv').config(),
        email: 'cliff.crerar@gmail.com'
    }
}
console.log('publishOptions: ', publishOptions);

ghPages.publish('dist', publishOptions /*onDeployTrue();*/

/*'
function onDeployTrue(err) {
    err && console.error('ERROR: ', err);
    ut.log('Deploy is true');
    const cmd = cp.spawn('np', [ /*'--dryrun'2
], {
    cwd: process.cwd(),
    detached: false,
    stdio: 'inherit'
});

console.log('cmd: ', cmd);
return cmd;
} */