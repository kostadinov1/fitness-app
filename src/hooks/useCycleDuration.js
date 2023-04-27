
export const  useCycleDuration = (start_date, end_date) => {
		const singleDay = 1000 * 60 * 60 * 24
		const startDate = new Date(start_date)
		const endDate = new Date(end_date)
		const res = Math.round(endDate.getTime() - startDate.getTime()) / singleDay;
		const result = res.toFixed(0);
		console.log(result)
		return result
	}

