import { HorizontalCard } from '@/component/Card'
import Head from 'next/head'
import Text from '@/component/Text'
import Photo from '@/component/Photo'
// import Slick from '@/component/slick'
import Topic from '@/component/Topic'
import EditorsPick from '@/component/EditorsPick'
import PopularTags from '@/component/PopularTags'
import Footer from '@/component/Footer'

export default function Home() {
	return (
		<>
			<Head>
				<meta
					name='description'
					content='Generated by create-t3-app'
				/>
			</Head>
			<main className=''>
				{/* <div className='grid grid-flow-col'>
					<HorizontalCard
						size={50}
						key={1}
					/>
				</div> */}
				<div className=' mx-4 md:mx-18 flex flex-col lg:mx-28 xl:mx-32 xxl:mx-36'>
					<div className='lg:flex mt-36 '>
						<div className='lg:w-5/12 h-96 '>
							<Text />
						</div>
						<div className='lg:w-6/12 flex items-center justify-center pb-36'>
							<Photo />
						</div>
					</div>
					<div>
						<div className=''>
							<Topic />
						</div>
					</div>
					<div className='my-20'>
						<EditorsPick />
					</div>
					<div>
						<PopularTags />
					</div>
					<footer>
						<Footer />
					</footer>
				</div>
			</main>
		</>
	)
}
