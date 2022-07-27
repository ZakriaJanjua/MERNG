const express = require('express');
const volleyball = require('volleyball');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

app.use(cors());

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error(err));

app.use(volleyball);
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	})
);

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});
