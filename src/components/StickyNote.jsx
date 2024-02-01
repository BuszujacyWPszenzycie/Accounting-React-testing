export default function StickyNote({ children }) {
	return (
		<div className='stickyNote__wrapper'>
			<div className='stickyNote__header'>
				<h3 className='stickyNote__title'>Notatka</h3>
				<button className='stickyNote__btn'>Close</button>
			</div>
			<textarea className='stickyNote__textarea'></textarea>
		</div>
	)
}
