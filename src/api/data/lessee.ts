export type lesseeData = { name: string; lastResponse: string};
export const getLesseeData = () => {
	let data = [
		{ name: 'John Doe', lastResponse: '2024-10-29T22:45:00' },
		{ name: 'Alice Smith', lastResponse: '2024-10-28T21:30:00' },
		{ name: 'Bob Johnson', lastResponse: '2024-10-30T10:15:00' },
		{ name: 'Charlie Brown', lastResponse: '2024-10-27T18:00:00' },
		{ name: 'David Lee', lastResponse: '2024-10-25T14:10:00' },
		{ name: 'Emma Wilson', lastResponse: '2024-10-31T16:50:00' },
		{ name: 'Frank Miller', lastResponse: '2024-10-23T12:30:00' },
		{ name: 'Grace Adams', lastResponse: '2024-10-22T11:45:00' },
		{ name: 'Hannah White', lastResponse: '2024-10-26T09:20:00' },
		{ name: 'Ian Taylor', lastResponse: '2024-10-21T08:10:00' },
		{ name: 'Jack Moore', lastResponse: '2024-10-20T07:40:00' },
		{ name: 'Kelly Clark', lastResponse: '2024-10-24T06:55:00' },
		{ name: 'Liam Martinez', lastResponse: '2024-10-18T05:35:00' },
		{ name: 'Mia Rodriguez', lastResponse: '2024-10-17T04:20:00' },
		{ name: 'Nathan Scott', lastResponse: '2024-10-16T03:15:00' },
		{ name: 'Olivia Hall', lastResponse: '2024-10-15T02:05:00' },
		{ name: 'Paul Allen', lastResponse: '2024-10-14T01:50:00' },
		{ name: 'Quinn Young', lastResponse: '2024-10-13T00:30:00' },
		{ name: 'Rachel King', lastResponse: '2024-10-12T23:10:00' },
		{ name: 'Sam Walker', lastResponse: '2024-10-11T22:00:00' },
	];
	
	return data
}