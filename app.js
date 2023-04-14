const express = require("express");
// const cors = require("cors");
const router = require("./routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

const app = express();

const cors=require("cors");

const corsOptions ={
   origin:'*',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration


// const router = express.Router();
// const api = express.api();


app.use(router);

app.all("*", (req, res, next) => {
 next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

const PORT = 3001;
const HOST = '192.168.1.109';
app.listen(PORT, '192.168.1.109', () => {
 console.log(`server running on port ${PORT}`);
});

module.exports = app; //Choosing port 3000 for our listening port.