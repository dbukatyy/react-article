export function dateFilter(date) {
	return {
		type: 'CHANGE_DATE',
		payload: {date}
	}
}