import styles from "@/styles/Home.module.scss";
import {
	Hero,
	RecentMovies,
	TopRated,
	PopularTV,
	TopRatedTV,
} from "@/components";
import type { Movies, Result, Series, TVResult } from "@/interfaces";
import Head from "next/head";

type Props = {
	posts: Result[];
	topRatedData: Result[];
	popularTVData: TVResult[];
	topRatedTVData: TVResult[];
};

export default function Home({
	posts,
	topRatedData,
	popularTVData,
	topRatedTVData,
}: Props) {
	return (
		<>
			<Head>
				<title>Movie app</title>
				<meta
					name="description"
					content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
					key="desc"
				/>
			</Head>
			<Hero />
			<div className={styles.container}>
				<main className={styles.main}>
					<RecentMovies posts={posts} />
					<TopRated topRatedData={topRatedData} />
					<PopularTV popularTVData={popularTVData} />
					<TopRatedTV topRatedTVData={topRatedTVData} />
				</main>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`
	);
	const topRated = await fetch(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
	);
	const popularTV = await fetch(
		`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`
	);
	const topRatedTV = await fetch(
		`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}`
	);
	const posts: Movies = await res.json();
	const topRatedData: Movies = await topRated.json();
	const popularTVData: Series = await popularTV.json();
	const topRatedTVData: Series = await topRatedTV.json();

	return {
		props: {
			posts: posts.results,
			topRatedData: topRatedData.results,
			popularTVData: popularTVData.results,
			topRatedTVData: topRatedTVData.results,
		},
	};
}
