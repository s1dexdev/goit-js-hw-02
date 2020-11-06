// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку 
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
    const arr = string.split(' ');
    let word = arr[0];
    
    for (let item of arr) {
        if (item.length > word.length) {
            word = item;
        }
    }

    return word;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'