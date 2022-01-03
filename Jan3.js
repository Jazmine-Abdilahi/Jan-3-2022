function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(orange);
    const juice = 'Juice with ${apples} apples and ${oranges} oranges.';
    return juice;
}
fruitProcessor(2, 3);

// Part 2

const calcAge = function (birthYeah) {
    return 2037 - birthYeah
}

const yearsUntilRetirement = function (brithYeah, firstName) {
    const age = calcAge(birthYeah);
    const Retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years <3`);
        return Retirement;
    } else {
        (`${firstName} has already retired :)`)
        return Retirement;
    }
    return -1;
}

console.log(yearsUntilRetirement(2010, 'Yasmine'));
console.log(yearsUntilRetirement(1950, 'Jazmine'));

// Part 3

const scoreCats = calcAverage(44, 23, 71);
const scoreRedPandas = calcAverage(65, 54, 49);
console.log(scoreCats, scoreRedPandas);

const checkWinner = function (avgcats, AvgRedPanda) {
    if (avgCats >= 2 * avgRedPandas) {
        console.log(`Cats win :0 (${avgCats} vs. ${avgRedPandas})`;)
    }
} else if (avgRedPandas >= 2 * avgCats) {
    console.log(`RedPandas win :0 (${avgRedPandas} vs. ${avgCats})`;)
} else {
    console.log('noody wins.....')
}



