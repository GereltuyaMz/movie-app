import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Layout.module.scss";

export const Header = () => {
	return (
		<nav className={styles.navBar}>
			<Link href="/">
				<Image
					src="/vercel.svg"
					alt="Vercel Logo"
					width={100}
					height={24}
					priority
				/>
			</Link>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/movies">Movies</Link>
				</li>
				<li>
					<Link href="/series">TV Series</Link>
				</li>
				<li>
					<Link href="/profile">Profile</Link>
				</li>
			</ul>
		</nav>
	);
};
