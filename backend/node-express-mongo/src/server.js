const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

dotenv.config();
connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/upload', uploadRoutes);

__dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.get('/', (req, res) => {
    res.send('API is running....');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
