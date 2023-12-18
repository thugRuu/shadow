import React from 'react'
import PopularTagsbutton from './PopularTagsbutton'

function PopularTags() {
	return (
		<>
			<div className='my-9'>
				<h1 className='text-5xl my-7'>Popular Tags</h1>
				<p className='text-lg my-7'>Most search keyword</p>
			</div>

			<div className='grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-6 '>
				<PopularTagsbutton
					imageSrc='https://th.bing.com/th/id/OIP.0l6uVJ3xCscc7pSE9rewaAHaEK?rs=1&pid=ImgDetMain'
					altText='img'
					desc='Travel'
				/>
				<PopularTagsbutton
					imageSrc='https://th.bing.com/th/id/R.63a76c20297ffbfbe151073bfdd21ffc?rik=%2faxTI5WT22Pn4Q&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2014%2f07%2f18%2fowl-picture_104817480_56.jpg&ehk=XCzp2uKel8fQ5K2Aul1PTaQSCtIpUzIxop1%2bjfMmqT8%3d&risl=&pid=ImgRaw&r=0'
					altText='img'
					desc='PC'
				/>
				<PopularTagsbutton
					imageSrc='https://th.bing.com/th/id/R.63a76c20297ffbfbe151073bfdd21ffc?rik=%2faxTI5WT22Pn4Q&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2014%2f07%2f18%2fowl-picture_104817480_56.jpg&ehk=XCzp2uKel8fQ5K2Aul1PTaQSCtIpUzIxop1%2bjfMmqT8%3d&risl=&pid=ImgRaw&r=0'
					altText='img'
					desc='Laptop'
				/>
				<PopularTagsbutton
					imageSrc=''
					altText='img'
					desc='Angry Bird'
				/>
				<PopularTagsbutton
					imageSrc=''
					altText='img'
					desc='GTA V'
				/>
				<PopularTagsbutton
					imageSrc=''
					altText='img'
					desc='Saitama'
				/>
				<PopularTagsbutton
					imageSrc=''
					altText='img'
					desc='Tomato'
				/>
				<PopularTagsbutton
					imageSrc=''
					altText='img'
					desc='Potato'
				/>
				<PopularTagsbutton
					imageSrc=''
					altText='img'
					desc='MOMO'
				/>
				<PopularTagsbutton
					imageSrc=''
					altText='img'
					desc='Chaomin'
				/>
				<PopularTagsbutton
					imageSrc=''
					altText='img'
					desc='Carbonara'
				/>
				<PopularTagsbutton
					imageSrc=''
					altText='img'
					desc='Toilet'
				/>
			</div>
		</>
	)
}

export default PopularTags
