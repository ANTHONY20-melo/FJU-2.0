import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';

import routes from './routes/index.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { env } from './config/env.js';

const app = express();

app.use(helmet());
app.use(
	cors({
		origin: env.CLIENT_URL,
		methods: ['GET', 'POST', 'PATCH', 'DELETE'],
	})
);
app.use(express.json({ limit: '100kb' }));
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
	res.json({
		status: 'ok',
		timestamp: new Date().toISOString(),
	});
});

const registrationLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 10,
	standardHeaders: true,
	legacyHeaders: false,
	message: {
		message: 'Muitas tentativas. Aguarde alguns minutos.',
	},
});

app.use('/api/registrations', registrationLimiter);

app.use('/api', routes);

app.use(errorMiddleware);

export default app;
