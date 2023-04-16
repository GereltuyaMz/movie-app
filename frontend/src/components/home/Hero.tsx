import React from "react";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";

export const Hero = () => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.hero}>
				<div className={styles.heroContent}>
					<h1>Demon Slayer: Kimetsu no Yaiba</h1>
					<p>
						It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who
						sells charcoal for a living, finds his family slaughtered by a
						demon. To make matters worse, his younger sister Nezuko, the sole
						survivor, has been transformed into a demon herself. Though
						devastated by this grim reality, Tanjiro resolves to become a “demon
						slayer” so that he can turn his sister back into a human, and kill
						the demon that massacred his family.
					</p>
					<button>Watch Trailer</button>
				</div>
				<div className={styles.heroImg}>
					<Image
						src="/assets/demon-slayer.jpg"
						alt="Demon slayer"
						width={400}
						height={530}
					/>
				</div>
			</div>
		</section>
	);
};
