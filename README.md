# NASA Open MCT User Guide

## Installation

* Requires the following version of Node.js: v14.15.4. Not compatible with higher versions of Node.js.
* Visualization: https://gitlab.lrz.de/lls/vis-frame
* YouTube Tutorial Playlist: https://www.youtube.com/watch?v=hXqlugfHrCo&list=PLWAvG5LVeBRVgN-MH8NbRGIRosDzcge3h&index=2
* Go into the `openmct` folder and run `npm install` to get required packages for telemetry server. 
* Run `npm start`, got to `localhost:8080`.

## Implementing Custom Telemetry

* Run `npm start`, got to `localhost:8080` to start Open MCT.
* Go to `python_scripts` > `Telemetry_Object_Generator` > `Telemetry_Object_Generator.py`. You can customize the paramters here to create a custom telemetry object and specify which port it is coming from. Will generate a Python file and a JSON file.
* Change back into `openmct` folder. Add in plugin to `plugin.js` (do not need file extension when you add in plugin).
* Add in plugin to `index.html` in `openmct`.
* Add contents to `server.js` as well into `app.use()`.
* Restart telemetry server.
