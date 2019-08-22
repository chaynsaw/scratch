// function wordCountEngine(document):
//     wordMap = new Map()
//     wordList = document.split()
//     largestCount = 0;
function wordCountEngine(doc) {
  const map = new Map();
  const wordList = doc.split(' ');
  let largestCount = 0;

//     for i from 0 to wordList.length-1:
//         # convert each token to lowercase
//         word = wordList[i].toLowerCase()
  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i].toLowerCase();
    const charArray = [];
    for (let char of word) {
      if (char >= 'a' && char <= 'z') {
        charArray.push(char);
      }
      
    }
    const cleanWord = charArray.join('');
    let count = 0;
    if (map.has(cleanWord)) {
      count = map.get(cleanWord);
      count++;
    } else {
      count = 1;
    }
    if (count > largestCount) {
      largestCount = count
    }
    map.set(cleanWord,count);
  }
  // const result = [];
  // for (let key of map) {
  //   key[1] = key[1].toString()
  //   result.push(key);
    
  // }
  // // result.sort((a,b) => b[1] - a[1])
  // return result;
  const counterList = new Array()
//     # init the word counter list of lists.
//     # Since, in the worst case scenario, the
//     # number of lists is going to be as
//     # big as the maximum occurrence count,
//     # we need counterList's size to be the
//     # same to be able to store these lists.
//     # Creating counterList will allow us to
//     # “bucket-sort” the list by word occurrences
//     counterList = new Array(largestCount+1)
//     for j from 0 to largestCount:
//         counterList[j] = null

//     # add all words to a list indexed by the
//     # corresponding occurrence number.
//     for word in wordMap.keys():
//         counter = wordMap[word]
//         wordCounterList = counterList[counter]

//         if (wordCounterList == null):
//             wordCounterList = []

//         wordCounterList.push(word)
//         counterList[counter] = wordCounterList

//     # iterate through the list in reverse order
//     # and add only non-null values to result
//     result = []
//     for l from counterList.length-1 to 0:
//         wordCounterList = counterList[l]
//         if (wordCounterList == null):
//             continue

//         stringifiedOccurrenceVal = toString(l)
//         for m from 0 to wordCounterList.length-1:
//             result.push([wordCounterList[m], stringifiedOccurrenceVal])

//     return result

}

let doc = "Cause I'm Slim Shady, yes I'm the real Shady, All you other Slim Shadys are just imitating So won't the real Slim Shady, please stand up, Please stand up, Please stand up"
wordCountEngine(doc);