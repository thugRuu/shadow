import Typewriter from 'typewriter-effect'

const Text = () => {
	return (
		<div className=''>
			<h5>Hello Everyone</h5>
			<h1 className='text-5xl font-extrabold my-7 bg-gradient-to-r from-[#326885]  to-[#E1EDF4] bg-clip-text text-transparent'>I'm</h1>
			<div className='text-5xl font-extrabold my-7 bg-gradient-to-r from-[#326885]  to-[#E1EDF4] bg-clip-text text-transparent'>
			
			 	<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString('<span class="">Pervert</span>')
							.pauseFor(1000)
							.deleteAll()
							.typeString('<span class="">Gay</span>')
							.pauseFor(1000)
							.deleteAll()
							.typeString('<span> Samrat</span>')
							.start()
					}}
					options={{
						autoStart: true,
						loop: true,
						cursor: '|',
					}}
				/>
			</div>

			<p className='my-7'>
				i am samrat pameru and i send love letter to panti madam. i eat too much
				banana so my banana is small. 
			</p>
			<div className='mt-6 p-2 w-full mb-5  flex justify-center xxl:flex-row bg-[#326885] bg-opacity-40 shadow-lg shadow-black rounded-lg border-[1px] border-white '>
				<div className='w-3/4 flex align-middle justify-center '>
					<input
						className='bg-transparent outline-none text-slate-950 placeholder:text-center'
						placeholder='Enter your email'
					></input>
				</div>
				<div className='flex justify-center w-1/4'>
					<button className='bg-rose-600 p-2.5 mr-3 my-1 rounded-lg xxl:mr-12 '>
						subscrive
					</button>
				</div>
			</div>
		</div>
	)
}
export default Text
