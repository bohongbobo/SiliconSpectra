// Complete missing code.

const frogs = [
	{
		name: 'bobTheFrog',
		age: 2,
		gender: 'male',
		favoriteFood: 'fly',
		weight: 5,
	}, 
	{
		name: 'lisaTheFrog',
		age: 3,
		gender: 'female',
		favoriteFood: 'fly',
		weight: 1,
	}, 
	{
		name: 'sallyTheFrog',
		age: 10,
		gender: 'female',
		favoriteFood: 'caterpillar',
		weight: 20,
	}, 
	{
		name: 'mikeTheFrog',
		age: 1,
		gender: 'male',
		favoriteFood: 'worm',
		weight: 7,
	}, 
	{
		name: 'georgeTheFrog',
		age: 7,
		gender: 'male',
		favoriteFood: 'fly',
		weight: 28,
	}, 
	{
		name: 'kellyTheFrog',
		age: 3,
		gender: 'female',
		favoriteFood: 'ladybug',
		weight: 3,
	}]

var createFilterers = function () {
	const _filters = {
		ids: [],
		fns: {},
	}

	return {
		addFilter(name, fn) {
			_filters.ids.push(name)
			_filters.fns[name] = fn
		},
		removeFilter(name) {
			/* Complete code here */
			_filters.ids.splice(_filters.ids.indexOf(name), 1);

			// const index = _filters.ids.indexOf(name);
			// if(index !== -1) _filters.ids.splice(index, 1)
			// delete _filters.fns[name];
		},
		filter(arr) {
			// Start filtering main processing
			return arr.reduce((acc, item) => {
				for (let index in _filters.ids) {
					const id     = _filters.ids[index];
					const filter = _filters.fns[id];
					if (!filter(item)) {
						return acc;
					}
				}
				return acc.concat(item);
			}, [])
		},
	}
}

const filterer = createFilterers()

filterer.addFilter('fat-frogs', frog => {
	return frog.weight >= 8
})

filterer.addFilter('male-frogs', frog => {
	return frog.gender === 'male'
})

filterer.removeFilter('fat-frogs')

const filteredFrogs = filterer.filter(frogs) //?


