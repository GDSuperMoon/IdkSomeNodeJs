// Modules
var events = require('events');
var eventEmitter = new events.EventEmitter();

function main(main) {
  try {
  // Objects
  var d = new Date();

  // Main script
  if (main == false) {
    console.log("WARN: Main variable has set to false.")
  } else {
    console.log("Main variable has set to true :D")
  }
  for (i = 0; i < 5; i++) {
    if (i == 5) {
      while (i < 5) {
        console.log(i)
        break;
      }
    }
  }
  switch (main) {
    case 0:
  }

  var shaders = [ "Main shader", "TV Shader" ]

  var super_shaders = [ "Main shader X", "Too Laggy Shader" ]

  var modes = [ 'Main Mode', 'Creative Mode', 'Explore Mode' ]

  function settings(settings) { // Settings function
    var main = true;
    var app = true;
    var LDM = true;
    return settings;
  }
  function app(app) { // App function
    {
      let x = y;
      let y = x;
      var cookie = true;
    }
    return app;
  }
  return main;
  var data = { // JSON Data
    "data": {
      "main": true,
      "app": true
    }
  }
  var package = { // JSON Package
    "package" : {
        "app-name": "My first app",
        "app-version": "1.0"
      }
    }
  } catch(err) {
  console.log(err.name);
  }
}

main() // Launchs main function