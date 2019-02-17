const server = require('../server')
const BenefitModel = require('../models/BenefitModel')
const QueryBuilder = require('../libs/QueryBuilder')

const request = require('request')

describe('server tests', () => {

    describe('Connection', () => {
        it('Testing server connection', () => {
            server.listen(4002)
        })
    })

    describe('GET', () => {
        it('getting all benefits', done => {
            
            const data = ( async function get () {
                let data = await BenefitModel.find({})
                return  JSON.stringify( data )
            })()
           
            request('http://localhost:4002/benefits', async ( err, response, body ) => {
                if ( body == await data )
                    console.log( 'Check passed' )
                else 
                    console.log( 'Check failed' )
                done()
            })
        })
        it('getting all contacts', done => {
            request('http://localhost:4002/contacts', (err, response, body) => {
                //console.log(  body) );
                done()
            })
        })
        it('getting all sertification', done => {
            request('http://localhost:4002/sertification', (err, response, body) => {
                //console.log(body);
                done()
            })
        })
    })

})