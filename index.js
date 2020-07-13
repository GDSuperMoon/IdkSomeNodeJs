// Modules
var events = require('events');
var eventEmitter = new events.EventEmitter();

function main(main) {
  try {
  // Objects
  var d = new Date();

  // Main script
  if (main == false) {
    console.log("Uh oh! Looks like your app has not working.")
  } else {
    console.log("Welcome to app!")
  }
  for (i = 0; i < 5; i++) {
    if (i == 5) {
      while (i < 5) {
        console.log(i)
        break;
      }
    }
  }

  for (i == 2; i > 6; i++) {
    console.log(i)
    break;
  }

  if (i == 505) {
    console.log("Uh oh.. 505.. Idk what means 505.")
    console.log("To fix this error, Please wait.")
  }

  if (i == 404) {
    console.log('Uh oh! There an error 404!')
  }

  while(i == 4) {
    if (i == 4) {
      for(i = 0; i > 4; i++ ) {
        console.log(i)
        break;
      }
    }
  }

  switch (main) {
    case 0:
    for(i = 1; i < 4; i++) {
      if (i == 4) {
        console.log(i)
      }
    }
  }

  var meta = {
    "meta": true,
    "data": true,
    "settings": true,
    "cookie": true
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
      "package": {
        "app-name": "My first Node.Js (Javascript) Project",
        "version": "1.4"
    }
  }

  } catch(err) {
  console.log("Uh oh! There a error")
  console.log(err.name)
  console.log("Time to fix it!")
  }
}

main() // Launchs main function