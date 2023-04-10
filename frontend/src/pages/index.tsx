import Image from "next/image";
import { Meta } from "@/components/Meta";
import { Header } from "@/components/layout/Header";
import styles from "@/styles/Home.module.scss";

export default function Home() {
	return (
		<>
			<Meta />
			<Header />
			<main className={styles.main}>
				<h1>Movie app</h1>
			</main>
		</>
	);
}

// <Image
// 	src="/vercel.svg"
// 	alt="Vercel Logo"
// 	className={styles.vercelLogo}
// 	width={100}
// 	height={24}
// 	priority
// />;
