require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const imageCoursesRouter = require('./routes/imageCourses');
const mediaRouter = require('./routes/media');
const orderPaymentsRouter = require('./routes/orderPayments');
const paymentsRouter = require('./routes/payments');
const refreshTokensRouter = require('./routes/refreshTokens');
const mentorsRouter = require('./routes/mentors');
const chaptersRouter = require('./routes/chapters');
const lessonsRouter = require('./routes/lessons');
const myCoursesRouter = require('./routes/myCourses');
const reviewsRouter = require('./routes/reviews');
const webhookRouter = require('./routes/webhook');

const verifyToken = require('./middleware/verifyToken')
const can = require('./middleware/permission')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/media', verifyToken, can('admin', 'student'), mediaRouter);
app.use('/orders', verifyToken, can('admin', 'student'), orderPaymentsRouter);
app.use('/payments', paymentsRouter);
app.use('/mentors', verifyToken, can('admin'), mentorsRouter);
app.use('/lessons', verifyToken, can('admin'), lessonsRouter);
app.use('/chapters', verifyToken, can('admin'), chaptersRouter);
app.use('/refresh-tokens', refreshTokensRouter);
app.use('/image-courses', verifyToken, can('admin'), imageCoursesRouter);
app.use('/my-courses', verifyToken, can('admin', 'student'), myCoursesRouter);
app.use('/reviews', verifyToken, can('admin', 'student'), reviewsRouter);
app.use('/webhook', webhookRouter);

module.exports = app;
