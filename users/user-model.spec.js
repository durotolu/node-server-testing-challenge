const Users = require('./users-model')
const db = require('../data/dbConfig')

beforeEach(async () => {
   await db('users').truncate()
})

describe('User model', () => {
    describe('insert function', () => {
        let users
        test('should insert user', async () => {
            await Users.add({ name: 'tobi', department: 'math' })
            
            users = await db('users')
            expect(users).toHaveLength(1)

            await Users.add({ name: 'shade', department: 'tech' })

            users = await db('users')
            expect(users).toHaveLength(2)
        })
    })
})