import Slick from './Slick'

function topic() {
	return (
		<>
			<div className='md:flex bg-slate-600 p-2 rounded-lg '>
				<div className=' md:w-1/5 p-3 '>
					<h4>this is the text for carousel</h4>
					<p>a for apple b for ball c for cat and d for dog</p>
				</div>
				<div className='md:w-4/5'>
					<Slick />
				</div>
			</div>
		</>
	)
}

export default topic
