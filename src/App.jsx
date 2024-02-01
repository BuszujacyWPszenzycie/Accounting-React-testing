import { useState } from 'react'
import StickyNote from './components/StickyNote'

function App() {
	return (
		<div className='app'>
			<div className='notes__wrapper'>
				<StickyNote></StickyNote>
			</div>

			<button className='btn__add'>Add New Note</button>
		</div>
	)
}

export default App
