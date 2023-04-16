import React from "react";
import styles from "@/styles/Home.module.scss";
import type { Result } from "@/interfaces";
import { SingleMovie } from "../SingleMovie";

type Props = {
	topRatedData: Result[];
};

export const TopRated = ({ topRatedData }: Props) => {
	return (
		<section className={styles.topRated}>
			<div className={styles.sectionTitle}>
				<h2>Top rated movies</h2>
				<button>View more</button>
			</div>
			<div className={styles.movies}>
				{topRatedData.map((movie) => {
					return <SingleMovie movie={movie} key={movie.id} />;
				})}
			</div>
		</section>
	);
};
