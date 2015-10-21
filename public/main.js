/**
 * Main slurm-mon
 */

console.log("We are in main.js");
var socket = io.connect();

var app = angular.module('slurmMonApp', []);

app.controller("slurmControler", function($scope) {

	$scope.name = "Durak";
	//Emit ready event.
	socket.emit('ready');

	// Listen for the talk event.
	socket.on('talk', function(data) {
	    console.log(data);
	    //alert(data.message);
	}) 
	
});

