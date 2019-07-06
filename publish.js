/**
 * @ Author: Cliff Crerar
 * @ Create Time: 2019-07-06 13:46:42
 * @ Modified by: Your name
 * @ Modified time: 2019-07-06 16:57:27
 * @ Description: publishes package and pushes the project to master and prod build to gh-pages brach
 */

// use strict

const ut = require('util');
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const ghPages = require('gh-pages');
const deploy = false;


cp.execSync(path.join(__dirname, './git-scr/commit-push.sh auto-commit-on-publish'));
// deploy ? process.NODE_DEBUG = "gh-pages npm run deploy.js" : console.log('Did not deploy');

publishOptions = {
    repo: require('./package.json').repository.url,
    remote: 'upstream',
    message: 'Auto-generated commit',
    user: {
        name: 'CliffCrerar',
        email: 'cliff.crerar@gmail.com'
    }
}

// console.log(process);

ghPages.publish('dist', publishOptions, onDeployTrue());

function onDeployTrue(err) {

    err && console.error('ERROR: ', err);

    ut.log('Deploy is true');


    const cmd = cp.spawn('np', ['--dryrun'], {
        cwd: process.cwd(),
        detached: false,
        stdio: 'inherit'
    });
}