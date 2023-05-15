import styles from "@/styles/Home.module.scss";
import React, { useContext } from "react";
import {
	Hero,
	RecentMovies,
	TopRated,
	PopularTV,
	TopRatedTV,
} from "@/components";
import type { Movies, Result, Series, TVResult } from "@/interfaces";
import SignUp from "./signup";
import { LocalContext, AuthContextType } from "@/context/LocalStorageContext";
import LogIn from "./login";
import { useSession } from "next-auth/react";

type Props = {
	posts: Result[];
	topRatedData: Result[];
};

const movieURL = "http://localhost:8080/movies";

export default function Home({ posts, topRatedData }: Props) {
	const { data: session, status } = useSession();
	const { auth, userData } = useContext(LocalContext) as AuthContextType;

	console.log("userData", userData);
	// if (status === "loading") return null;
	return (
		<>
			{session || auth ? (
				<User posts={posts} topRatedData={topRatedData} />
			) : (
				<Guest />
			)}
		</>
	);
}

const Guest = () => {
	return <LogIn />;
};

const User = ({ posts, topRatedData }: Props) => {
	return (
		<>
			<Hero />
			<div className={styles.container}>
				<main className={styles.main}>
					<RecentMovies posts={posts} />
					<TopRated topRatedData={topRatedData} />
				</main>
			</div>
		</>
	);
};

export async function getStaticProps() {
	const res = await fetch(`${movieURL}/upcoming`);
	const topRated = await fetch(`${movieURL}/toprating`);

	// const popularTV = await fetch(
	// 	`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`
	// );
	// const topRatedTV = await fetch(
	// 	`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}`
	// );
	const posts: Movies = await res.json();
	const topRatedData: Movies = await topRated.json();
	// const popularTVData: Series = await popularTV.json();
	// const topRatedTVData: Series = await topRatedTV.json();

	return {
		props: {
			posts: posts,
			topRatedData: topRatedData,
			// popularTVData: popularTVData.results,
			// topRatedTVData: topRatedTVData.results,
		},
	};
}
