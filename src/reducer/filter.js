const defaultFilter = {
	from: null,
	to: null
}

export default (filter = defaultFilter, action) => {
	const {type, payload} = action;

	switch(type) {
		case 'CHANGE_DATE': return payload.date
	}

	return filter;
}