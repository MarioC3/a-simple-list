import List from './components/List'

function App() {
	return (
		<>
			<main className="container mx-auto space-y-4 px-2 py-8">
				<div>
					<h1 className="text-right text-2xl font-black text-sky-800">A Simple List</h1>
					<p className="text-right text-sm">by Beto Carlos</p>
				</div>

				<div className="rounded-lg bg-gray-50 p-4">
					<List />
				</div>
			</main>
		</>
	)
}

export default App
