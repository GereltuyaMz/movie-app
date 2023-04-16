import React from "react";
import styles from "@/styles/Home.module.scss";
import type { TVResult } from "@/interfaces";
import { SingleTV } from "../SingleTV";

type Props = {
	topRatedTVData: TVResult[];
};

export const TopRatedTV = ({ topRatedTVData }: Props) => {
	return (
		<section>
			<div className={styles.sectionTitle}>
				<h2>Top rated TV</h2>
				<button>View more</button>
			</div>
			<div className={styles.movies}>
				{topRatedTVData.map((tv) => {
					return <SingleTV tv={tv} key={tv.id} />;
				})}
			</div>
		</section>
	);
};
