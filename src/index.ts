//entering Express
import salesOrdersRouter from './routes/salesOrdersRoutes';
import express from 'express';
import { sequelize } from './database';
//import saleOrderItemRoutes from './routes/saleOrderItem';
import dotenv from 'dotenv';

const app = express();

// configure dotenv
dotenv.config();

// telling where to find static files
app.use(express.static('public'));

// watching the consumed routes on terminal
app.use((req, _res, next) => {
	console.log(`${req.method} ${req.url} fue consumido.`);
	next();
});

//cors
/* const cors = require('cors')
const corsOptions = {
    origin:['http://localhost:3000'],
    optionSuccessStatus: 200
}
app.use(cors(corsOptions)) */

// read formdata
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//----------------------------------------------//
//-------------------- ROUTES ------------------//

app.use('/api/sales', salesOrdersRouter);

/* app.get('/ping', (_req, res) => {
	console.log('alguien ha hecho un ping');
	res.send('pon');
}); */

const PORT = process.env.PORT || 3030;

sequelize
	.sync()
	.then(() => {
		console.log('Database synchronized!');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch(error => {
		console.error('Unable to synchronize database:', error);
	});

//export default app;
