function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}

function reduce(array, f, acc) {
  if (acc === undefined){
  	acc = array[0]
  	array = array.slice(1)
  }
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
}

// Above this line, these functions work fine.
// My question is the bottom one. Now, map as written works in its current form, works. HOWEVER... it ceases to work when you remove [] from the 5th line (what you would ordinarily set the starting value of acc to).
// WHY? Given my implementation of reduce, I thought that if NO ACC initial value is provided,then why do I get an error that says acc.push is not a valid function? 

// NEVER MIND... IF IT ASSUMES THE FIRST VALUE IS THE FIRST ITEM OF THE ARRAY, IT'S NOT AN ARRAY, IT's AN ITEM. THEREFORE, YOU MUST SPECIFY THE INITIAL STARTIONG VALUE IS AN EMPTY ARRAY. 

function map(array, f){
	return reduce(array, function(acc, element){
		acc.push(f(element))
		return acc
	}, [])
}