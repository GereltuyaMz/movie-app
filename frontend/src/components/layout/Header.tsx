import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
// import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.scss";
import { LocalContext, AuthContextType } from "@/context/LocalStorageContext";

export const Header = () => {
	// const { data: session, status } = useSession();
	// const { auth, logout } = useLocalStorageAuth();
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

	// const handleLogin = (e: any) => {
	// 	e.preventDefault();
	// 	signIn();
	// };

	// const handleLogOut = (e: any) => {
	// 	e.preventDefault();
	// 	signOut();
	// };

	const handlelogOut = () => {
		logout();
		router.push("/login");
	};

	// console.log("current user", auth);
	// console.log("current user data", userData);
	return (
		<>
			{/* <header>
				<div>
					<div>
						{session && (
							<a href={`/api/auth/signout`} onClick={handleLogOut}>
								Sign out
							</a>
						)}
						{!session && (
							<div>
								<span>You're not signed in</span>
								<a href={`/api/auth/signin`} onClick={handleLogin}>
									Sign in
								</a>
							</div>
						)}
					</div>
				</div>
			</header> */}
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
