# SyncQueue.js
## Overview
`SyncQueue.js` is a simple queue written in JavaScript which runs asynchronous jobs in order as if they were synchronous. The single `SyncQueue.js` file works in CommonJS-like environments (such as NodeJS), AMD environments (such as RequireJS), and as a script which can be included by itself on a web page.

##Example Usage
First get the `SyncQueue` constructor for your environment.

NodeJS (install with `npm install syncqueue`):

    var SyncQueue = require('syncqueue');

AMD:

    define(['path/to/SyncQueue'], function (SyncQueue) {
      // SyncQueue is in scope here
    });

HTML:

    <script src="path/to/SyncQueue.js"></script>
    <script>
      // SyncQueue is in scope here
    </script>

Once you have the `SyncQueue` constructor, usage is simple:

    var q = new SyncQueue();
    q.add(function (done) {
      setTimeout(function () {
        console.log('First job.');
        done();
      }, 1000);
    });
    q.add(function (done) {
      setTimeout(function () {
        console.log('Second job.');
        done();
      }, 2000);
    });
    q.add(function (done) {
      setTimeout(function () {
        console.log('Third job.');
        done();
      }, 3000);
    });

The console output from the code above will be `First job.` followed by `Second job.` followed by `Third job.`. The entire sequence should take approximately 6000ms.

## Tests

To run the tests (really just one test) install mocha with `npm install -g mocha`. From this directory run `npm test` or `mocha test` and the tests will run.

## License

**The MIT License**

Copyright (c) 2012 Kenneth Powers <mail@kenpowers.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.