/* eslint-disable no-console */
import mongoose from 'mongoose';

const connect = (url = process.env.DATABASE, opts = {}) => {
  mongoose.connection.on('error', err => {
    console.log('Error in cosmos db connection:');
    console.error(err);
  });

  mongoose.connection.on('connecting', () => {
    console.log('Connecting to cosmosdb...');
  });

  mongoose.connection.on('connected', () => {
    console.log('Connection with cosmosdb stablished successfully');
  });

  mongoose.connection.on('disconnected', () => {
    console.warn('Cosmosdb disconected');
  });

  mongoose.connection.on('reconnected', () => {
    console.log('Cosmosdb reconnected successfully');
  });

  mongoose.connection.on('reconnectFailed', () => {
    console.error('Reconection with cosmosdb failed');
  });

  try {
    mongoose.connect(url, {
      ...opts,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (error) {
    console.warn('Error trying to connect to database');
    console.error(error);
  }
};

export default connect;
