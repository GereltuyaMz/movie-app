import React from "react";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import type { Result } from "@/interfaces";
import Link from "next/link";
import slugify from "@sindresorhus/slugify";

type Props = {
	movie: Result;
};

export const SingleMovie = ({ movie }: Props) => {
	return (
		<Link href={`/movie/${slugify(movie?.title)}`}>
			<div className={styles.movie}>
				<Image
					src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
					alt={`${movie.title} poster`}
					width={270}
					height={380}
				/>
				<p>{movie.title}</p>
			</div>
		</Link>
	);
};
