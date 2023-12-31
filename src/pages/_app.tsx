import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { type AppType } from 'next/app'
import { api } from '@/utils/api'

import '@/styles/globals.css'
import Navbar from '@/component/Navbar'
import Head from 'next/head'

const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	return (
		<>
			<SessionProvider session={session}>
				<Head>
					<title>Shadow Blog</title>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1'
					/>
					<link
						rel='icon'
						href='/favicon.ico'
					/>
				</Head>
				<Navbar />
				<Component {...pageProps} />
			</SessionProvider>
		</>
	)
}

export default api.withTRPC(MyApp)
