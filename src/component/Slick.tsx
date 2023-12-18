'use client'
import Slider from 'react-slick'
import Image from 'next/image'
import { Public } from '@prisma/client/runtime/library'
import img1 from 'public/images/pexels-jadson-thomas-1500610.jpg'
import img2 from 'public/images/pexels-moose-photos-1037995.jpg'
import SlickPicture from './SlickPicture'

const Slick = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1540,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
		],
	}
	return (
		<div>
			<Slider {...settings}>
				<SlickPicture
					altText='samrat'
					imageSrc=' https://scontent.fktm16-1.fna.fbcdn.net/v/t31.18172-8/15994681_1840719402853902_3744766928181176971_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=srPb-KfaeLgAX9uzK5K&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBdHi-8SqCvLu64PRCB7dO_rieyFmO9qEI-5vU8cLC6EA&oe=65A77C29'
				/>
				<SlickPicture
					altText='samrat'
					imageSrc=' https://scontent.fktm16-1.fna.fbcdn.net/v/t31.18172-8/15936352_1840725249519984_4694423410187048714_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4dc865&_nc_ohc=tzj_1umtCVsAX8iE4uq&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBpIj9P7BWy72BvII2O8H13pcsWTPhsvC_2buS5jOeAIQ&oe=65A77E38'
				/>
				<SlickPicture
					altText='samrat'
					imageSrc='https://scontent.fktm16-1.fna.fbcdn.net/v/t31.18172-8/15975251_1840721149520394_2883199003871783890_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=hHlVg_Qk3H4AX_1qkX_&_nc_oc=AQncpTwzH4GbsAZ7NZnVuVP0ZcwgBFUE4QofRE21M7B04EdJRTaMJ85P4q8Ab0s3SfuqKw2plhUzUxGQmcMOzhLp&_nc_ht=scontent.fktm16-1.fna&oh=00_AfAexLx_wiRRqUAVZTjIHRQVwU3bWQXFSPsbbGAaBV12vA&oe=65A772D1'
				/>
				<SlickPicture
					altText='samrat'
					imageSrc=' https://scontent.fktm16-1.fna.fbcdn.net/v/t31.18172-8/15974959_1840720972853745_5826633903359509353_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_ohc=Kq3085UXfOEAX-sUyUu&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBDQB9CsID8vBeGyilcNBeBE00ws4i2cBhDNRP1IUr9vA&oe=65A7945E'
				/>
				<SlickPicture
					altText='samrat'
					imageSrc=' https://scontent.fktm16-1.fna.fbcdn.net/v/t1.18169-9/24774678_1992778190981355_7997924612733248880_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7a1959&_nc_ohc=LtHSjNWINxEAX-xuXvK&_nc_oc=AQmsa9gemDh4bNzeTMurdOsZlmFjXrLBN2ZQMaBAZMHTp2MZq48rAsluFPdfDMhyk_GBFiSvgyI5Szew_68fu6wY&_nc_ht=scontent.fktm16-1.fna&oh=00_AfAH5Z7vOdxIuiQylWYVoyaveAUT1BnyklBWqg3H9E8P_w&oe=65A76C02'
				/>
			</Slider>
		</div>
	)
}

export default Slick
