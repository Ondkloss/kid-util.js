function make(value, mode = 'MOD10') {
    if (mode.toUpperCase() == 'MOD10') {
        return makeMod10(value);
    }
    else if (mode.toUpperCase() == 'MOD11') {
        return makeMod11(value);
    }
}

function makeMod10(value) {
    return String(value) + String(makeMod10ControlDigit(value));
}


function makeMod11(value) {
    return String(value) + String(makeMod11ControlDigit(value));
}

// While this could be made more dense, maybe this has some hope of being readable
function makeMod10ControlDigit(value) {
    validateInteger(value);
    validateLength(value);
    const number = parseInt(value);
    const digits = String(number).split('');
    const multiplicands = [2, 1];
    let index = 0;
    let total = 0;

    for (let i = digits.length - 1; i >= 0; i--) {
        const digit = digits[i];
        const multiplicand = multiplicands[index % multiplicands.length];
        const result = parseInt(digit) * multiplicand;
        total += sumOfDigits(result);
        index += 1;
    }

    const control = 10 - (total % 10);

    if (control == 10) {
        return 0;
    }
    return control;
}

// While this could be made more dense, maybe this has some hope of being readable
function makeMod11ControlDigit(value) {
    validateInteger(value);
    validateLength(value);
    const number = parseInt(value);
    const digits = String(number).split('');
    const multiplicands = [2, 3, 4, 5, 6, 7];
    let index = 0;
    let total = 0;

    for (let i = digits.length - 1; i >= 0; i--) {
        const digit = digits[i];
        const multiplicand = multiplicands[index % multiplicands.length];
        const result = parseInt(digit) * multiplicand;
        total += result;
        index += 1;
    }

    const control = 11 - (total % 11);

    if (control == 11) {
        return 0;
    }
    if (control == 10) {
        return '-';
    }
    return control;
}

function verify(value, mode = 'MOD10') {
    if (mode.toUpperCase() == 'MOD10') {
        return verifyMod10(value);
    }
    else if (mode.toUpperCase() == 'MOD11') {
        return verifyMod11(value);
    }
}


function verifyMod10(value) {
    const generated = makeMod10(value.substring(0, value.length - 1));
    return value == generated;
}


function verifyMod11(value) {
    const generated = makeMod11(value.substring(0, value.length - 1));
    return value == generated;
}

// https://stackoverflow.com/a/10834843
function validateInteger(value) {
    const result = /^[0-9]+$/.test(value);

    if (!result) {
        throw new Error('Invalid KID. Must be an integer.');
    }
}

function validateLength(value) {
    if (value.length < 1 || value.length > 24) {
        throw new Error('Invalid KID length. Must be from 2 to 25 characters, with control digit.');
    }
}

// https://stackoverflow.com/a/14940026
function sumOfDigits(n) {
    let r = 0;
    while (n > 0) {
        r += n % 10;
        n = Math.floor(n / 10);
    }
    return r;
}

module.exports = {
    make,
    makeMod10,
    makeMod11,
    makeMod10ControlDigit,
    makeMod11ControlDigit,
    verify,
    verifyMod10,
    verifyMod11,
};