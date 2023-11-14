import Image from 'next/image'
import favicon from '/public/images/picture.png'
export const HorizontalCard = (props: { size: number }) => (
	<div className='mx-16 py-2'>
		<div className='card my-5 bg-base-200 py-5 shadow-lg lg:card-side'>
			<figure className='px-2 py-2'>
				<Image
					className='rounded-xl shadow-slate-500'
					src={favicon}
					alt='Album'
					sizes={'100vw'}
					style={{ width: '100%', height: 'auto' }}
					width={props.size}
					height={props.size}
				></Image>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>Headline</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
					aperiam sit tenetur consequatur saepe porro vel sequi, explicabo
					corrupti magni culpa autem aliquid quis exercitationem ex unde
					mollitia eveniet dolores?
				</p>
			</div>
		</div>
	</div>
)

export const VerticalCard = (props: { size: number; avatarSize?: number }) => (
	<div className='mx-auto py-1 '>
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure>
				<Image
					className='rounded-xl shadow-slate-500'
					src={favicon}
					alt='Album'
					sizes={'65vw'}
					style={{ width: 'auto', height: 'auto' }}
					width={props.size}
					height={props.size}
				></Image>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className='flex flex-row justify-start items-start gap-2'>
					<div className='avatar'>
						<div className='rounded-full'>
							<Image
								alt='Album'
								width={props.avatarSize}
								height={props.avatarSize}
								src={favicon}
							/>
						</div>
					</div>
					<div>
						<p className='text-xs'>Samrat Paneru</p>
					</div>
					<div>
						<p className='text-xs'>23 September 2023</p>
					</div>
				</div>
			</div>
		</div>
	</div>
)
