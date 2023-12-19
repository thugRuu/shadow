import Slick from './Slick'

function topic() {
	return (
		<>
			<div className='md:flex bg-[#326885] bg-opacity-40 p-2 rounded-lg shadow-xl shadow-black border-[1.5px] border-white'>
				<div className=' md:w-1/5 p-3 '>
					<h4>this is the text for carousel</h4>
					<p>a for apple b for ball c for cat and d for dog</p>
				</div>
				<div className='md:w-4/5 pb-3 rounded-xl'>
					<Slick />
				</div>
			</div>
		</>
	)
}

export default topic
