import { VerticalCard } from '@/component/card'

const index = () => {
	return (
		<main>
			<div className='flex items-center justify-center'>
				<div className='mx-auto p-2 gap-4 grid grid-cols-12  '>
					<div className='p-1 m-0 md:col-span-4 col-span-12'>
						<VerticalCard
							size={50}
							avatarSize={25}
						/>
					</div>
					<div className='p-1 m-0 md:col-span-4 col-span-12 '>
						<VerticalCard
							size={50}
							avatarSize={25}
						/>
					</div>
					<div className='p-1 m-0 md:col-span-4 col-span-12'>
						<VerticalCard
							size={50}
							avatarSize={25}
						/>
					</div>
				</div>
			</div>
		</main>
	)
}
export default index
