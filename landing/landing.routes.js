const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const { Client } = require('pg')

require('dotenv').config();

const router = express.Router();
const { dbUser, dbPassword, dbPort, dbHost, redisHost, redisPort, postgressHost, postgressPort} = require('../config/app-config');
const MONGO_URI = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}`;
const REDIS_URL = `redis://${redisHost}:${redisPort}`;
const redisClient = redis.createClient({url : REDIS_URL});
const postgresConnectionString = `postgresql://${dbUser}:${dbPassword}@${postgressHost}:${postgressPort}`

//mongo connection
mongoose
.connect(MONGO_URI)
.then(() => console.log("connected to db..."))
.catch(() => console.log("faild to connect to db..."));

//redis connection
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('Redis connect'));
redisClient.connect();
redisClient.set('key', 'value');

//postgres connection

const postgressClient = new Client({connectionString : postgresConnectionString })
postgressClient.connect()
.then(() => console.log("connected to postgress db..."))
.catch((err) => console.log("faild to connect to postgress db...", err));

router.get('/', async (req, res) => {
    const value = await redisClient.get('key');
    res.send(`<h1>Hello To The App  2 ${value}</h1>`)
});

module.exports = router;

