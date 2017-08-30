function anagramCounter (wordsArray) {
  var count = 0;
  var pairs = pairedWithSets(wordsArray);
  for(var i = 0; i < pairs.length; i++) {
    var word = pairs[i][0];
    var sets = pairs[i][1];
    for(var j = 0; j < sets.length; j++) {
      if (wordMatchesSet(word, sets[j]))
        count += 1;
    }
  }
  return count;
}

function mkSet(elements) {
  return function(find) {
    for(var i = 0, l = elements.length; i < l; i++) {
      if (elements[i] === find)
        return true;
    }
    return false;
  }
}

function wordMatchesSet(word, set) {
  var result = true;
  for(var i = 0; i < word.length; i++) {
    result = result && isInSet(word[i], set);
  }
  return result;
}

function isInSet(element, set) {
  return set(element);
}

function pairedWithSets(items) {
  var result = [];
  for(var i = 0, l = items.length; i < l; i++) {
    result[i] = [
      items[i],                      // position 0 hold the word
      items.slice(i + 1).map(mkSet) // position 1 hold the sets to search
    ];
  }
  return result;
}