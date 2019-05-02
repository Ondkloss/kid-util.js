/* eslint no-console: 0 */
'use strict';

const kid = require('../kid-util');
const expect = require('chai').expect;


console.log(kid);

describe('#mod10()', function () {

    context('makeMod10 234567', function () {
        it('should return 2345676', function () {
            expect(kid.makeMod10('234567')).to.equal('2345676')
        })
    })

    context('makeMod10ControlDigit 234567', function () {
        it('should return 6', function () {
            expect(kid.makeMod10ControlDigit('234567')).to.equal(6)
        })
    })

    context('makeMod10 0', function () {
        it('should return 00', function () {
            expect(kid.makeMod10('0')).to.equal('00')
        })
    })

    context('makeMod10 abc', function () {
        it('should throw error', function () {
            expect(function () {
                kid.makeMod10('abc')
            }).to.throw(Error, 'Invalid KID. Must be an integer.')
        })
    })

    context('makeMod10 blank', function () {
        it('should throw error', function () {
            expect(function () {
                kid.makeMod10('')
            }).to.throw(Error, 'Invalid KID. Must be an integer.')
        })
    })

    context('makeMod10 01234567890123456789012345', function () {
        it('should throw error', function () {
            expect(function () {
                kid.makeMod10('01234567890123456789012345')
            }).to.throw(Error, 'Invalid KID length. Must be from 2 to 25 characters, with control digit.')
        })
    })

    context('makeMod11 1234567890', function () {
        it('should return 12345678903', function () {
            expect(kid.makeMod11('1234567890')).to.equal('12345678903')
        })
    })

    context('makeMod11ControlDigit 1234567890', function () {
        it('should return 3', function () {
            expect(kid.makeMod11ControlDigit('1234567890')).to.equal(3)
        })
    })

    context('makeMod11 31', function () {
        it('should return 310', function () {
            expect(kid.makeMod11('31')).to.equal('310')
        })
    })

    context('makeMod11 40', function () {
        it('should return 40-', function () {
            expect(kid.makeMod11('40')).to.equal('40-')
        })
    })

    context('makeMod11 abc', function () {
        it('should throw error', function () {
            expect(function () {
                kid.makeMod11('abc')
            }).to.throw(Error, 'Invalid KID. Must be an integer.')
        })
    })

    context('makeMod11 blank', function () {
        it('should throw error', function () {
            expect(function () {
                kid.makeMod11('')
            }).to.throw(Error, 'Invalid KID. Must be an integer.')
        })
    })

    context('makeMod11 01234567890123456789012345', function () {
        it('should throw error', function () {
            expect(function () {
                kid.makeMod11('01234567890123456789012345')
            }).to.throw(Error, 'Invalid KID length. Must be from 2 to 25 characters, with control digit.')
        })
    })
})