#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const readline = require('readline');


const options = require('minimist')(process.argv.slice(2))

const optionsName = require('minimist')(process.argv.slice(2), {
    string: ['n', 'new']
})

if (options._.length === 0 && (options.v || options.version)) {
    console.log('cocosjs-cli: ' + require('./package.json').version)
    process.exit()
}

if (options._.length === 0 && (options.h || options.help)) {
    console.log([
        '',
        '  Usage: cocosjs [command] [options]',
        '',
        '',
        '  Commands:',
        '',
        '    init <ProjectName> generates a new project',
        '',
        '  Options:',
        '',
        '    -h, --help    output usage information',
        '    -v, --version output the version number',
        ''
    ].join('\n'))
    process.exit(0)
}

if (options._.length === 0 && (options.n || options.new)) {
    if(optionsName.n || optionsName.new){
      init(options.new || options.n)
    }else{
      console.log('default project is cocosjsProj')
      init('cocosjsProj')
    }
    // process.exit(0)
}

function init(name) {
    // console.log(name)

    validateProjectName(name);

    if (fs.existsSync(name)) {
        createAfterConfirmation(name);
    } else {
        createProject(name);
    }
}


function createAfterConfirmation(name) {
    const terminal = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    terminal.question(
        "Floder is already exits, do you want override it ? yes/no ",
        answer => {
            if (answer === "yes" || answer === "y") {
                createProject(name);
                terminal.close();
            } else {
                process.exit();
            }
        }
    );
}

function createProject(name) {
    var root = path.resolve(name);
    // var projectName = path.basename(root);
    var templatesPath = path.join(__dirname, 'templates');

    console.log(
        'This will create a new cocosjs project in',
        root
    );

    if (!fs.existsSync(root)) {
        fs.mkdirSync(root);
        traverse(templatesPath, root)   
    }
}

function validateProjectName(name) {
  if (!name.match(/^[$A-Z_][0-9A-Z_$]*$/i)) {
    console.error(
      '"%s" is not a valid name for a project. Please use a valid identifier ' +
        'name (alphanumeric).',
      name
    );
    process.exit(1);
  }
}

function traverse(templatePath, targetPath) {
  console.log(templatePath, targetPath)
  try {
    const paths = fs.readdirSync(templatePath);
    // console.log(paths)
    paths.forEach(_path => {
      const _targetPath = path.resolve(targetPath, _path);
      const _templatePath = path.resolve(templatePath, _path);
      console.log("creating..." + _targetPath);
      if (!fs.statSync(_templatePath).isFile()) {
        fs.mkdirSync(_targetPath);
        traverse(_templatePath, _targetPath);
      } else {
        copyFile(_targetPath, _templatePath);
      }
    });
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
}
function copyFile(_targetPath, _templatePath) {
  fs.writeFileSync(_targetPath, fs.readFileSync(_templatePath), "utf-8");
  //fs.createReadStream(_targetPath).pipe(fs.createWriteStream(_templatePath));
}


// function copyTemplate(from, to) {
//     from = path.join(__dirname, 'templates', from)
//     write(to, fs.readFileSync(from, 'utf-8'))
// }

// function write(path, str, mode) {
//     fs.writeFileSync(path, str)
// }

// function mkdir(path, fn) {
//     fs.mkdir(path, function(err) {
//         fn && fn()
//     })
// }

console.log('build complete')