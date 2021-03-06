"use strict";
// Copyright 2015 CometJS. All Rights Reserved.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at 
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and limitations under the License.

var app = require('app');
/**
 * @param app.window.URL, app.window.command
 * @access app.private.command
 * @description Access the private, public or protected control or ownership of the application.
 **/
 /** @protected **/
app.window.URL('1.100.COMET');
/**
 * @description Break the app down into access privileges 
 * and creating the elements to private, public, and protected.
 **/ 
app.access.createElement('app.private.command', 'app.public.command', 'app.protected.command');
/**
 * @param {app.access} 
 * @overview Set access point to app.
 **/ 
app.access.command('app.access.private','app.access.public', 'app.access.protected');
app.access.getUser('');

if(typeof app.access.getUser('') === true){
 app.access.confirm('You are now logged in to your app.');
}

application.prototype.render = (function(){
  var render = this.render;
  
  if(app.access || app.parent + this.render){
   this.render.push(app);
  } else {
   this.render = false;
   app.access = false;
   console.error('Unable to access owner');
  }
  this.render.start = new this.render;
});
app.window.open(app);

app.require(application.render);

app.on("build");
/**
 * @overview Loading internal files to app/project.
 * @todo 
 * Application Enhancments:
 * - Window Sizing
 * - App Compatibility
 **/
app.handle(window.open(app));
/** @protected **/
app.load('package.json');

/** @protected **/
app.load('comet.js');

/** @protected **/
app.load('desktop.js');

/** @protected **/
app.load('base.js');

/** @protected **/
app.load('render.js');

/** @protected **/
app.load('build.js');
