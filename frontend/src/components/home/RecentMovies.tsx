import React from "react";
import styles from "@/styles/Home.module.scss";
import type { Result } from "@/interfaces";
import { SingleMovie } from "../SingleMovie";

type Props = {
	posts: Result[];
};

export const RecentMovies = ({ posts }: Props) => {
	return (
		<section className={styles.recentMovies}>
			<div className={styles.sectionTitle}>
				<h2>Upcoming movies</h2>
				<button>View more</button>
			</div>
			<div className={styles.movies}>
				{posts.map((movie) => {
					return <SingleMovie movie={movie} key={movie.id} />;
				})}
			</div>
		</section>
	);
};
