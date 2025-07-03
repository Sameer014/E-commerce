import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import connectDB from '#config/db.config.js';
import { errorHandler } from '#middlewares/error.middleware.js';
import productRoutes from '#routes/product.route.js';
import userRoutes from '#routes/user.route.js';

dotenv.config();

const port = process.env.PORT;

connectDB();

const app = express();
app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
         res.send('API is running...');
});

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}.`.yellow.bold);
});
