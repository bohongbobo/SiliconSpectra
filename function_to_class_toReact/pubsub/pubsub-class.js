import data from './data';

class React {

	constructor(state) {
		this.state = {
			ids: [],
			fns: {},
		}
	}

	SetState(name, fn) {
		this.state.ids.push(name);
		this.state.fns[name] = fn;
	}

	RemoveState(name) {
		const index = this.state.ids.indexOf(name)
		if (index !== -1) this.state.ids.splice(index, 1)
		delete this.state.fns[name].pop
	}

	Render(arr) {
		return arr.reduce((accumulator, item) => {
			for (let index in this.state.ids) {
				const id = this.state.ids[index];
				const _filter = this.state.fns[id];
				if (!_filter(item)) {
					return accumulator;
				}
			}
			return accumulator.concat(item);
		}, [])
	}
}

let App = new React();

App.SetState('fat-frogs', frog => {
	return frog.weight >= 8
})

App.SetState('male-frogs', frog => {
	return frog.gender === 'male'
})

App.RemoveState('fat-frogs')

App.Render(data) //?

