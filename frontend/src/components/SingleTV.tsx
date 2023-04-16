import React from "react";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import type { TVResult } from "@/interfaces";

type Props = {
	tv: TVResult;
};

export const SingleTV = ({ tv }: Props) => {
	return (
		<div className={styles.movie}>
			<Image
				src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
				alt={`${tv.name} poster`}
				width={270}
				height={380}
			/>
			<p>{tv.name}</p>
		</div>
	);
};
