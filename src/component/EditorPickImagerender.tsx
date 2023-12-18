interface ImageProps {
	imageSrc: string
	altText: string
	heading: string
	desc: string
}

const EditorPickImagerender = ({
	imageSrc,
	altText,
	desc,
	heading,
}: ImageProps) => {
	return (
		<div className=' m-2 bg-slate-600 shadow-xl rounded-xl'>
			<figure>
				<img
					src={imageSrc}
					alt={altText}
					className='rounded-t-xl  w-full max-h-64 object-cover h-56'
				/>
			</figure>
			<div className='card-body items-center text-center'>
				<h2 className='card-title'>{heading}</h2>
				<p>{desc}</p>
			</div>
		</div>
	)
}

export default EditorPickImagerender
