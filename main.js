var input = 'You whale figure out loops';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const humanInput = input[i];
    //console.log (i);
    for (let j = 0; j < vowels.length; j++) {
        const whaleInput = vowels[j];
        //console.log (j);
        if (humanInput === whaleInput) {
            resultArray.push(humanInput);{
                if (humanInput === 'e'){
                    resultArray.push ('e');
                }if (humanInput === 'u'){
                    resultArray.push ('u');
                    
                    
                }
            }
    
        }
    }
}
console.log (resultArray.join('').toUpperCase());
