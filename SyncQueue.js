/**
 * SyncQueue.js 0.1.0 Copyright (c) 2012 Kenneth Powers
 * Released under the MIT License
 */
(function (name, global, definition) {
  if (typeof module !== 'undefined') {
    module.exports = definition();
  } else if (typeof define !== 'undefined' && typeof define.amd === 'object') {
    define(definition);
  } else {
    global[name] = definition();
  }
})('SyncQueue', this, function () {
  // SyncQueue constructor
  var SyncQueue = function () {
    if (!(this instanceof SyncQueue)) {
      return new SyncQueue();
    }
    this._queue = [];
    this._running = false;
  };

  // Function which adds a new job to the queue
  SyncQueue.prototype.push = function (job) {
    this._queue.push(job);
    if (!this._running) {
      this._running = true;
      runNext(this);
    }
  };

  // Function which runs the next job in the queue
  function runNext(sq) {
    if (sq._queue.length > 0) {
      sq._queue.shift()(function () {
        runNext(sq);
      });
    } else {
      sq._running = false;
    }
  }

  // Return constructor
  return SyncQueue;
});