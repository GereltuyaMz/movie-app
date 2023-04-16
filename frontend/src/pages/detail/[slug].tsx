import React from "react";
import Image from "next/image";
import styles from "@/styles/Detail.module.scss";
import { BsBookmark, BsPlay } from "react-icons/bs";

const Detail = () => {
	return (
		<div className={styles.detail}>
			<Image
				src={"/assets/super-mario.jpg"}
				alt={"super mario bros"}
				width={270}
				height={380}
			/>
			<div className={styles.info}>
				<h1 className={styles.title}>The Super Mario Bros. Movie (2023)</h1>
				<p>
					2023 <span>1h32m</span>
				</p>
				<p>Animation, Adventure, Family, Fantasy, Comedy</p>
				<div className={styles.actions}>
					<div>score</div>
					<BsBookmark />
					<div className={styles.trailer}>
						<BsPlay />
						<p>play trailer</p>
					</div>
				</div>
				<div className={styles.overview}>
					<h4>Overview</h4>
					<p>
						While working underground to fix a water main, Brooklyn plumbers—and
						brothers—Mario and Luigi are transported down a mysterious pipe and
						wander into a magical new world. But when the brothers are
						separated, Mario embarks on an epic quest to find Luigi.
					</p>
				</div>
				<div className={styles.credits}>
					<p>
						Directed by <span>Aaron Horvath</span>
					</p>
					<p>
						Written by <span>Matt Fogel</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Detail;
