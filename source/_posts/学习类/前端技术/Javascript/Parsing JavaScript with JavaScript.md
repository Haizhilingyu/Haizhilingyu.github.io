---
title: 【笔记-前端-ast】Parsing JavaScript with JavaScript
date: 2022-09-09 20:25:27
categories:
    - 学习类
    - 前端技术
    - Javascript
tags: 
    - javascript
    - ast
    - 提取元素
    - 转换
---
Over the weekend I started working on [llamaduck](https://github.com/Swizec/llamaduck)\- a simple tool that aims to figure out whether your code will run on the newly released node 0.6.0. Eventually, it might be able to perform other compatibility assessment tasks as well, but I’m focusing on simple stuff first.

Or at least I thought it was simple.

The [list of API changes since 0.4.x](https://github.com/joyent/node/wiki/API-changes-between-v0.4-and-v0.6) doesn’t seem that long and it should be easy enough to digest. But as it turns out, I spent almost all of Sunday just figuring out how to turn javascript into a beautiful analyzable [AST](http://en.wikipedia.org/wiki/Abstract_syntax_tree).

If you don’t know what an AST is – it’s a so-called abstract syntax tree, which means it should look identical regardless of what the actual syntax is. Although it will differ for different languages. So a CoffeeScript AST should look the same as JavaScript, but Python’s will differ.

## JavaScript Alterations and Changes

There are so many JavaScript alterations and changes that one may need to make as they work through the program that it is undoubtedly challenging for some people to keep up with precisely what they are supposed to do to take care of things like this. 

What is known is that JavaScript alterations and changes can make life a lot more challenging for you in the short term, but it will pay off with a better product in the long run. 

What I discovered was that there were a lot of changes that needed to be made to get JavaScript to line up just the way that I wanted it to. There are so many small and technical aspects of this kind of coding that need to be adhered to down to the letter, and it is certainly not easy to pull it off until one has a lot of time to sit down and figure out what they need to do. 

JavaScript remains the dominant language used by computer programmers to put their materials out onto the Internet, so it made a lot of sense to me to start using this as a primary tool to get my own work done as well. I have continued to rely on JavaScript for projects both large and small, and I know that the only way that I get the most possible value out of it is to use it in ways that are effective for my customers. 

The increased use of JavaScript for all programmers is something that has led me to believe that I must continue working on ways to make the most out of my time with this program and the skills that I know can be applied in the best ways possible to get my desired results. 

When running [JavaScript](https://dzone.com/articles/javascript-quiz-11) through the actual JavaScript program, it is common for programmers to run into some common issues. There are lines of exceptions that may appear at times, and there are other situations that arise which make it obvious that a certain piece of code is just not going to work as desired. If you run into that problem, just know that this is what the process is all about. Running the JavaScript through the program first is a great way to make sure those errors and omissions are eliminated from the final product. 

Look over every piece of this very carefully and make sure you understand what you are looking at. You may just discover that there is a lot more that you could be doing to help out your users after all. 

My research came up with [three options](https://dzone.com/articles/javascript-quiz-9):

1. Take a parser generator and a JavaScript grammar, and hope for the best
    
2. [JSLint](http://www.jslint.com/) has a parser … somewhere around line 2000
    
3. Uglify-JS supposedly has a parser too
    

The only viable option was uglify-js. It’s a neatly packaged node.js module that does a bit more than I need, but at least it’s got an easy-to-use parser with an exposed API interface.

## Score!

Here’s an example of a file that outputs its own [AST](https://dzone.com/articles/javascript-prototypal-inheritance) to give you a feel for what I’m talking about:

```js
var parser = require('uglify-js').parser;
var util = require('util');
 
(function get\_ast (path, callback) {
    require('fs').readFile(path, 'utf-8', function (err, data) {
        if (err) throw err;
 
        callback(parser.parse(data));
    });
})('./example.js', function (data) {
    console.log(util.inspect(data, true, null));
});
```

The file parses itself and outputs a tree encoded as a [javascript array](https://dzone.com/articles/javascript-module-system) (scroll past the insanity, there’s a bit more text there):
```js
[ 'toplevel',
  [ [ 'var',
      [ [ 'parser',
          [ 'dot',
            [ 'call',
              [ 'name', 'require', [length]: 2 ],
              [ [ 'string', 'uglify-js', [length]: 2 ],
                [length]: 1 ],
              [length]: 3 ],
            'parser',
            [length]: 3 ],
          [length]: 2 ],
        [length]: 1 ],
      [length]: 2 ],
    [ 'var',
      [ [ 'util',
          [ 'call',
            [ 'name', 'require', [length]: 2 ],
            [ [ 'string', 'util', [length]: 2 ], [length]: 1 ],
            [length]: 3 ],
          [length]: 2 ],
        [length]: 1 ],
      [length]: 2 ],
    [ 'stat',
      [ 'call',
        [ 'function',
          'get_ast',
          [ 'path', 'callback', [length]: 2 ],
          [ [ 'stat',
              [ 'call',
                [ 'dot',
                  [ 'call',
                    [ 'name', 'require', [length]: 2 ],
                    [ [ 'string', 'fs', [length]: 2 ], [length]: 1 ],
                    [length]: 3 ],
                  'readFile',
                  [length]: 3 ],
                [ [ 'name', 'path', [length]: 2 ],
                  [ 'string', 'utf-8', [length]: 2 ],
                  [ 'function',
                    null,
                    [ 'err', 'data', [length]: 2 ],
                    [ [ 'if',
                        [ 'name', 'err', [length]: 2 ],
                        [ 'throw',
                          [ 'name', 'err', [length]: 2 ],
                          [length]: 2 ],
                        undefined,
                        [length]: 4 ],
                      [ 'stat',
                        [ 'call',
                          [ 'name', 'callback', [length]: 2 ],
                          [ [ 'call',
                              [ 'dot',
                                [ 'name', 'parser', [length]: 2 ],
                                'parse',
                                [length]: 3 ],
                              [ [ 'name', 'data', [length]: 2 ], [length]: 1 ],
                              [length]: 3 ],
                            [length]: 1 ],
                          [length]: 3 ],
                        [length]: 2 ],
                      [length]: 2 ],
                    [length]: 4 ],
                  [length]: 3 ],
                [length]: 3 ],
              [length]: 2 ],
            [length]: 1 ],
          [length]: 4 ],
        [ [ 'string', './example.js', [length]: 2 ],
          [ 'function',
            null,
            [ 'data', [length]: 1 ],
            [ [ 'stat',
                [ 'call',
                  [ 'dot',
                    [ 'name', 'console', [length]: 2 ],
                    'log',
                    [length]: 3 ],
                  [ [ 'call',
                      [ 'dot',
                        [ 'name', 'util', [length]: 2 ],
                        'inspect',
                        [length]: 3 ],
                      [ [ 'name', 'data', [length]: 2 ],
                        [ 'name', 'true', [length]: 2 ],
                        [ 'name', 'null', [length]: 2 ],
                        [length]: 3 ],
                      [length]: 3 ],
                    [length]: 1 ],
                  [length]: 3 ],
                [length]: 2 ],
              [length]: 1 ],
            [length]: 4 ],
          [length]: 2 ],
        [length]: 3 ],
      [length]: 2 ],
    [length]: 3 ],
  [length]: 2 ]
```

## Conclusion

Now we have a simple tree we can [recursively analyze](https://dzone.com/articles/javascript-attacks-in-webviews) and look for incompatibilities. But before anything really practical can be done I need to figure out how to track [variable scope](http://en.wikipedia.org/wiki/Scope_%2528programming%2529). That’s really the hard bit because the code needs to check when variables become a critical section and then confirm that they do in fact eventually get used in a critical way.

But once that nut is cracked [llamaduck](https://github.com/Swizec/llamaduck) will be a neat little tool useful for many things.

If you’ve got some coding inclination, I’d love a helping hand over at the [llamaduck github repo](https://github.com/Swizec/llamaduck).

Related articles

- [Lessons From A Review Of JavaScript Code](http://coding.smashingmagazine.com/2011/10/27/lessons-from-a-review-of-javascript-code/) (coding.smashingmagazine.com)
    
- [ParserPlayground partial internals update](http://leuksman.com/log/2011/09/29/parserplayground-partial-internals-update/) (leuksman.com)
    
- [Google Closure Introduction](http://googleclosure.wordpress.com/2011/08/27/google-closure-introduction/) (googleclosure.wordpress.com)
    
- [Announcing JesCov – JavaScript code coverage](http://olabini.com/blog/2011/11/announcing-jescov-javascript-code-coverage/) (olabini.com)
    
- [Polyglot programming – combining functional, dynamic and imperative languages](http://www.mindscapehq.com/blog/index.php/2011/07/21/polyglot-programming-some-lessons-learned/) (mindscapehq.com)

转载自：https://dzone.com/articles/parsing-javascript-javascript