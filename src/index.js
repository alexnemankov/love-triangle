/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var numberOfLovers = preferences.length,
        counter = 0,
        numberOfTriangles;

    for (var i = 0; i < numberOfLovers; i++) {
        var first = preferences[i] - 1,
            second = preferences[first] - 1,
            third = preferences[second];


        if (third === i + 1  && preferences[i] !== i+1) {
            counter++;
        }
    }

    numberOfTriangles = counter / 3 ;

    return numberOfTriangles;
};
