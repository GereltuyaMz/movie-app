import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Layout.module.scss";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerItems}>
				<Image src="/vercel.svg" alt="Vercel Logo" width={100} height={20} />
				<ul>
					<h4>menu</h4>
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
				<ul>
					<h4>customer</h4>
					<li>Contact us</li>
					<li>FAQ</li>
					<li>Privacy policy</li>
					<li>Terms & condition</li>
				</ul>
				<div className={styles.socialIcons}>
					<h4>contact</h4>
					<BsFacebook />
					<BsInstagram />
					<BsTwitter />
				</div>
			</div>
			<div className={styles.copyRight}>
				<p> © 2023 Movie app. All Right Reserved</p>
			</div>
		</footer>
	);
};
