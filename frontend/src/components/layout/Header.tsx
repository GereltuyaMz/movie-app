import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.scss";
import { LocalContext, AuthContextType } from "@/context/LocalStorageContext";

export const Header = () => {
	const { data: session, status } = useSession();
	const [color, setColor] = useState(false);
	const router = useRouter();
	const { auth, userData, logout } = useContext(
		LocalContext
	) as AuthContextType;

	const changeColor = () => {
		if (window.scrollY >= 90) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeColor);
	}, []);

	const handlelogOut = () => {
		logout();
		router.push("/login");
	};

	if (session || auth) {
		return <NextAuth session={session} userData={userData} />;
	}

	return (
		<>
			<nav className={styles.navBar}>
				<div
					className={
						color
							? `${styles.navBarColor} ${styles.navBarItems}`
							: `${styles.navBarItems}`
					}
				>
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
						{auth ? (
							<>
								<li>
									<Link href="/profile">Profile</Link>
								</li>
								<li className={styles.logout} onClick={handlelogOut}>
									logout
								</li>
							</>
						) : (
							<>
								<li>
									<Link href="/signup">Sign Up</Link>
								</li>
								<li>
									<Link href="/login">Log In</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
};

const NextAuth = ({ session, userData }: any) => {
	const [color, setColor] = useState(false);

	const changeColor = () => {
		if (window.scrollY >= 90) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeColor);
	}, []);

	const handleLogOut = (e: any) => {
		e.preventDefault();
		signOut();
	};

	return (
		<nav className={styles.navBar}>
			<div
				className={
					color
						? `${styles.navBarColor} ${styles.navBarItems}`
						: `${styles.navBarItems}`
				}
			>
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
						<p>{userData?.email}</p>
						<p>{session?.user?.email}</p>
					</li>
					<li className={styles.logout} onClick={handleLogOut}>
						logout
					</li>
				</ul>
			</div>
		</nav>
	);
};
