var Tools = (
  /** @class */
  function() {
    function Tools2(options) {
      this.plugins = [];
      if (options && options.plugins) {
        this.plugins = options.plugins;
      }
    }
    Tools2.prototype.use = function(plugin) {
      this.plugins.push(plugin);
    };
    Tools2.prototype.applyPlugins = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var name = args[0], rest = args.slice(1);
      var findPlugin = this.plugins.find(function(plugin) {
        return plugin.name === name;
      });
      return findPlugin === null || findPlugin === void 0 ? void 0 : findPlugin.apply.apply(findPlugin, rest);
    };
    Tools2.prototype.add = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return args.reduce(function(pre, cur) {
        return pre += cur;
      });
    };
    Tools2.prototype.substract = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return args.reduce(function(pre, cur) {
        return pre -= cur;
      });
    };
    Tools2.prototype.debounce = function(fn, delay) {
      var timer;
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
          fn.apply(void 0, args);
        }, delay);
      };
    };
    Tools2.prototype.throttle = function(fn, delay) {
      var prevTime = 0;
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var nowTime = Date.now();
        if (nowTime - prevTime >= delay) {
          fn.apply(void 0, args);
          prevTime = nowTime;
        }
      };
    };
    Tools2.prototype.deepClone = function(obj) {
      if (typeof obj !== "object" || obj === null) {
        return obj;
      }
      var result;
      if (Array.isArray(obj)) {
        result = [];
      } else {
        result = {};
      }
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          result[key] = this.deepClone(obj[key]);
        }
      }
      return result;
    };
    return Tools2;
  }()
);

export { Tools as default };
