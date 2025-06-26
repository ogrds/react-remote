import {useState} from 'react';

import './index.css';

const IncrementButton = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
			<p className="text-4xl font-bold mb-4 text-blue-600">{count}</p>
			<button
				onClick={handleIncrement}
				className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
			>
				Increment
			</button>
		</div>
	);
};

export default IncrementButton;
