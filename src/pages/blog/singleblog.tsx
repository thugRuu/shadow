import Image from 'next/image'
import favicon from '/public/images/picture.png'
const SingleBlogPost = () => {
	return (
		<main>
			<div className=''>
				<div className='grid grid-cols-[repeat(auto-fit,_16.666666%)] m-auto p-24 justify-center text-justify '>
					<div className='justify-center justify-self-center mx-auto col-span-12'>
						<span className='text-center'>
							<Image
								src={favicon}
								width={1000}
								height={100}
								alt='Author Image'
							/>

							<h1 className='text-6xl font-bold'>Blog Post Title</h1>
							<p className='text-xl'>Author Name</p>
							<p className='text-xl'>Date</p>
						</span>
						<p className='text-2xl'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
							maiores consectetur voluptates optio inventore cupiditate soluta
							dolore praesentium enim nobis tempora quae rerum, distinctio
							temporibus voluptatibus veritatis! Ratione, quis atque.
						</p>
						<p className='text-2xl'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
							maiores consectetur voluptates optio inventore cupiditate soluta
							dolore praesentium enim nobis tempora quae rerum, distinctio
							temporibus voluptatibus veritatis! Ratione, quis atque.
						</p>
						<p className='text-2xl'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
							maiores consectetur voluptates optio inventore cupiditate soluta
							dolore praesentium enim nobis tempora quae rerum, distinctio
							temporibus voluptatibus veritatis! Ratione, quis atque.
						</p>
						<p className='text-2xl'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
							maiores consectetur voluptates optio inventore cupiditate soluta
							dolore praesentium enim nobis tempora quae rerum, distinctio
							temporibus voluptatibus veritatis! Ratione, quis atque.
						</p>
					</div>
				</div>
			</div>
		</main>
	)
}
export default SingleBlogPost
