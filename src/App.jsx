import { useState } from 'react'
import StickyNote from './components/StickyNote'

function App() {
	const [listOfStickyNotes, setListOfStickyNotes] = useState([])

	function addStickyNoteFunction() {
		const newStickyNote = {
			id: Math.random(),
			removeStickyNoteFunction: () => {},
		}

		const updatedListOfStickyNotes = [...listOfStickyNotes, newStickyNote]
		let ids = updatedListOfStickyNotes.map(id => id.id)
		console.log(ids)
		console.log(updatedListOfStickyNotes)
		setListOfStickyNotes(updatedListOfStickyNotes)
	}

	return (
		<div className='app'>
			<div className='notes__wrapper'>
				<StickyNote></StickyNote>
				{listOfStickyNotes.map(id => (
					<StickyNote key={id.id}>{id.id}</StickyNote>
				))}
			</div>
			<button className='btn__add' onClick={addStickyNoteFunction}>
				Add New Note
			</button>
		</div>
	)
}

export default App
