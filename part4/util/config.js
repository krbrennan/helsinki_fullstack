require('dotenv').config()

const PORT = process.env.PORT

const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGO_URI
  : process.env.MONGODB

module.exports = {
  MONGODB_URI,
  PORT
}