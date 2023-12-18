interface ImageProps {
	imageSrc: string
	altText: string
}
function SlickPicture({ imageSrc, altText }: ImageProps) {
	return (
		<div>
			<div className='p-2.5 h-64'>
				<h3>
					<img
						className=' h-72 w-auto object-cover '
						src={imageSrc}
						alt={altText}
					></img>
				</h3>
			</div>
		</div>
	)
}

export default SlickPicture
