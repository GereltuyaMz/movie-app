import React from "react";
import styles from "@/styles/Home.module.scss";
import type { TVResult } from "@/interfaces";
import { SingleTV } from "../SingleTV";

type Props = {
	popularTVData: TVResult[];
};

export const PopularTV = ({ popularTVData }: Props) => {
	return (
		<section>
			<div className={styles.sectionTitle}>
				<h2>Popular TV</h2>
				<button>View more</button>
			</div>
			<div className={styles.movies}>
				{popularTVData.map((tv) => {
					return <SingleTV tv={tv} key={tv.id} />;
				})}
			</div>
		</section>
	);
};
