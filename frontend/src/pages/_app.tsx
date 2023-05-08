import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { LocalProvider } from "@/context/LocalStorageContext";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
	return (
		<SessionProvider session={session}>
			<LocalProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</LocalProvider>
		</SessionProvider>
	);
}
