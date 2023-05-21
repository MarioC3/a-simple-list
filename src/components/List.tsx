import useSWR from 'swr'
import { User } from '../interfaces/User'

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

const fetcher = async (endpoint: string) => {
	const response = await fetch(endpoint)
	if (!response.ok) throw new Error('Something went wrong!')
	const data: User[] = await response.json()
	return data
}

function List() {
	const { data: users, error, isLoading } = useSWR(ENDPOINT, fetcher)

	if (isLoading) return <div className="text-green-600">Loading...</div>
	if (error) return <div className="font-bold text-red-600">Something went wrong!</div>
	return (
		<div>
			<ul className="space-y-4">
				{users?.map((user) => {
					return (
						<li
							className="space-y-1 rounded-md border border-gray-100 p-3 hover:bg-gray-200"
							key={user.id}
						>
							<div className="flex justify-between">
								<h2 className="text-lg font-semibold">{user.name}</h2>
								<div className="flex items-center justify-center rounded-full bg-sky-700 px-2 py-1 text-xs font-semibold text-white">
									<p className="leading-none">{user.username}</p>
								</div>
							</div>
							<div>
								<p className="text-sm">Email: {user.email}</p>
								<p className="text-sm">Website: {user.website}</p>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default List
