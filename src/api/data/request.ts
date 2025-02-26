export type requestData = { name: string; requestedAt: string };
export const getRequestData = () => {
	let data = [
		{
			name: 'John Doe',
			requestedAt: '2024-10-29T22:45:00',
		},
		{
			name: 'Alice Smith',
			requestedAt: '2024-10-28T21:30:00',
		},
		{
			name: 'Bob Johnson',
			requestedAt: '2024-10-30T10:15:00',
		},
		{
			name: 'Charlie Brown',
			requestedAt: '2024-10-27T18:00:00',
		},
		{
			name: 'David Lee',
			requestedAt: '2024-10-25T14:10:00',
		},
		{
			name: 'Emma Wilson',
			requestedAt: '2024-10-31T16:50:00',
		},
		{
			name: 'Frank Miller',
			requestedAt: '2024-10-23T12:30:00',
		},
		{
			name: 'Grace Adams',
			requestedAt: '2024-10-22T11:45:00',
		},
		{
			name: 'Hannah White',
			requestedAt: '2024-10-26T09:20:00',
		},
		{
			name: 'Ian Taylor',
			requestedAt: '2024-10-21T08:10:00',
		},
		{
			name: 'Jack Moore',
			requestedAt: '2024-10-20T07:40:00',
		},
		{
			name: 'Kelly Clark',
			requestedAt: '2024-10-24T06:55:00',
		},
		{
			name: 'Liam Martinez',
			requestedAt: '2024-10-18T05:35:00',
		},
		{
			name: 'Mia Rodriguez',
			requestedAt: '2024-10-17T04:20:00',
		},
		{
			name: 'Nathan Scott',
			requestedAt: '2024-10-16T03:15:00',
		},
		{
			name: 'Olivia Hall',
			requestedAt: '2024-10-15T02:05:00',
		},
		{
			name: 'Paul Allen',
			requestedAt: '2024-10-14T01:50:00',
		},
		{
			name: 'Quinn Young',
			requestedAt: '2024-10-13T00:30:00',
		},
		{
			name: 'Rachel King',
			requestedAt: '2024-10-12T23:10:00',
		},
		{
			name: 'Sam Walker',
			requestedAt: '2024-10-11T22:00:00',
		},
	]
	return data
}