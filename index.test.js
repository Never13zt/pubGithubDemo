var expect = require('chai').expect
var starWars = require('./index')

describe('starwars-name', function() {
    describe('all',function() {
        it('should be an array of string', function() {
            function isArrayOfStrings(list) {
                return list.every(item => {
                    return typeof item === 'string'
                })
            }

            expect(starWars.all).to.satisfy(isArrayOfStrings)
        })
    })
})

describe('random', function() {
    it('should return a random item from the starwars.all',function() {
        var randomItem = starWars.random()
        expect(starWars.all).to.include(randomItem)
    })
})