interface ImageProps {
	imageSrc: string
	altText: string
	desc: string
}
function PopularTagsbutton({ imageSrc, altText, desc }: ImageProps) {
	return (
		<div>
			<div className='h-20 w-40 dark:bg-orange-400 bg-white flex mx-auto rounded-2xl col-span-1 '>
				<div className='w-2/5 flex justify-center items-center'>
					<div className='bg-black rounded-full h-12 w-12'>
						<img
							src={imageSrc}
							alt={altText}
							className='w-full h-full rounded-full'
						/>
					</div>
				</div>
				<div className='w-3/5 flex justify-center items-center'>
					<h3 className='text-cyan-900 text-lg font-bold aligh'> {desc}</h3>
				</div>
			</div>
		</div>
	)
}

export default PopularTagsbutton
