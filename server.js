/*
 * slurm-mon 
 */

var express = require('express.io'), app = express(), path = require('path')
app.http().io();
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.io.on('connection', function(socket){
  console.log('User ' + socket.id + ' connected');
  socket.on('disconnect', function(){
    console.log('User ' + socket.id + ' disconnected');
  });
});

//Setup the ready route, and emit talk event.
app.io.route('ready', function(req) {
    req.io.emit('talk', {
        message: 'io event from an io route on the server'
    })
})

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});
app.listen(app.get('port'), function() {
	console.log('HTTP server listening on port ' + app.get('port'));
});
