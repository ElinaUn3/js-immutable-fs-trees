import {
    mkfile, mkdir, isDirectory, isFile, map,
  }   
  from'@hexlet/immutable-fs-trees';

  isFile(mkfile('config')); // true
  isDirectory(mkdir('etc')); // true
  
  const tree = mkdir('nodejs-package', [mkfile('Makefile'),
   mkfile('README.md'),
    mkdir('dist'),
     mkdir('_tests_'),
     [mkfile('half.test.js')],
     mkfile('babel.config.js'),
     mkdir('node_modules'),
     [mkdir('@babel')],
     [mkdir('cli')],
     [mkfile('LICENSE')]]);
  
  const callbackFn = (node) => {
    const { name } = node;
    const newName = name;
    return { ...node, name: newName };
  };

  console.dir(map(callbackFn, tree), { depth: null });