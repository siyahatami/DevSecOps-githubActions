
// const mongoose = require('mongoose');
// const {app, connect}  = require('../app');

// const { MongoMemoryServer } = require('mongodb-memory-server');
// const mongodb_inmemory = new MongoMemoryServer();
// jest.setTimeout(60000);


 

// beforeAll(async () => {
//     try {
//         mongoURL = await mongodb_inmemory.getConnectionString();
//         // mongoURL = await mongodb_inmemory.getUri()
//         connect(mongoURL)
//     } catch (err) {
//         console.error("connection to DB failed")
//     }
// }, 60000);


// afterEach(async () => {

//     const collections = mongoose.connection.collections;
//     for (const key in collections) {
//         const collection = collections[key];
//         await collection.deleteMany();
//     }

// }, 50000);


// afterAll(async () => {

//     await mongoose.connection.dropDatabase();
//     await mongoose.connection.close();
//     await mongodb_inmemory.stop();

// }, 55000);


// describe('User apis test ', () => {

//     test("it can add user correctly", () => {
     
//         expect(2+3).toEqual(5);

//     });

//     // it('can be created correctly', async () => {
//     //     expect(2+2).toE
//     //         .
//     //         .toThrow();
//     // });

// });

