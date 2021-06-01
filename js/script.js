const arr = [1, 2, 3, 4, 5, 6];

function mapArray(array, thing) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof string === 'string') {
        mappedArray.push(array[i].toString() + thing);
        }
        else {
        mappedArray.push(array[i] + thing);
        }
    }
    return console.log(mappedArray)
}

mapArray(arr, 10)

mapArray(arr, ' dogs')