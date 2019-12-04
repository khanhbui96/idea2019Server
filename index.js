require('dotenv').config();
// node_modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const formidableMiddleware = require('express-formidable');
const socketio = require('socket.io');
const http = require('http');

// my_modules
const userRoutes =  require('./routes/user.routes');
const vehicleRoutes = require('./routes/vehicle.routes ');
const driverRoutes = require('./routes/driver.routes');
const defineLevelRoutes = require('./routes/defineLevel.routes');
const commandRoutes = require('./routes/command.routes');
const motoBikeRoutes = require('./routes/motoBike.routes')
// connect_db
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/toolVt', {
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})


const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT;

io.on('connection', (socket)=>{
  console.log(`We have a new connection with id: ${socket.id} `);
  socket.on('disconnect', ()=>{
    console.log('A user had left')
  });
  socket.on('createRoom', (name)=>{
      socket.nameRoom = name;
      socket.join(name);
      io.sockets.emit('listRoom', Object.keys(socket.adapter.rooms));  })
  socket.on('sendMsgClient',(msg)=>{
      io.sockets.in(socket.nameRoom).emit('sendMsgServer', msg )
  } );
  

})

require('./configs/passport')(passport);
app.use(cors());
app.use(formidableMiddleware({
    encoding: 'utf-8',
    uploadDir:'/home/khanhbui/Desktop/toolVt/client/src/components/elements',
    multiples: true, // req.files to be arrays of files
  }))
app.get('/', (req, res)=>{
  res.send('hello khanh bui')
})
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/defineLevels', defineLevelRoutes);
app.use('/api/commands', commandRoutes);
app.use('/api/motoBikes', motoBikeRoutes);

server.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})

