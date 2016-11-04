

const printCommon = (list) => {
	let map = {}
	let uniqueArray
	const total = list.length
	let repeats = []

	for (let t of list){
// console.log(t)
		uniqueArray = t.filter(function(searchElement, fromIndex) {
             				return t.indexOf(searchElement) == fromIndex;
							});
// console.log('uniqueArray',uniqueArray)
		uniqueArray.forEach(function(t){
// console.log('t', t)
// console.log(map.hasOwnProperty(t), 'true')
	
			if(map.hasOwnProperty(t)){
				map[t] = map[t.toString()] + 1 
// console.log(map[t.toString()], 'value of map.t')
//	console.log(t, 'already exist in Map')
			} else{
				map[t] = 1;
			}
			
			if( map[t.toString()] === total){
				// console.log(t, 'repeats in all list')
				repeats.push(t)
			}
		})
	}
	// should return an array of the ones that repeat in all lists
	return repeats
}

module.exports = printCommon