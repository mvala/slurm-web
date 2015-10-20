/**
 * Main slurm-mon
 */

var socket = io.connect();

var app = angular.module('slurmMonApp', []) {

	//Emit ready event.
	socket.emit('ready') 

	// Listen for the talk event.
	socket.on('talk', function(data) {
	    alert(data.message)
	}) 
	
};

