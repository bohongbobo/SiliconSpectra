import data from './data';

var React = new function () {
	const state = {
		ids: [],
		fns: {},
	}

	return {
		on(name, fn) {
			state.ids.push(name)
			state.fns[name] = fn
		},
		off(name) {
			const index = state.ids.indexOf(name) //?
			if (index !== -1) state.ids.splice(index, 1)
			delete state.fns[name]
		},
		emit(arr) {
			return arr.reduce((accumulator, item) => {
				for (let index in state.ids) {
					const id      = state.ids[index];
					const _filter = state.fns[id];
					if (!_filter(item)) {
						return accumulator;
					}
				}
				return accumulator.concat(item);
			}, [])
		},
	}
}

React.on('fat-frogs', frog => {
	return frog.weight >= 8
})

React.on('male-frogs', frog => {
	return frog.gender === 'male'
})

React.emit(data) //?
