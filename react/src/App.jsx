import React from 'react';
import Home from './components/Home';

const App = () => {
	const name = 'Prabhu';
	return (
		<div className='bg-red-200'>
      <Home lak={ name } />
		</div>
	);
};

export default App;
