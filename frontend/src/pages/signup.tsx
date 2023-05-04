import React, { FormEvent, useContext, useEffect, useState } from "react";
import styles from "@/styles/Auth.module.scss";
import { useRouter } from "next/router";
import { AuthContextType, LocalContext } from "@/context/LocalStorageContext";

const SignUp = () => {
	const router = useRouter();
	const { signup, auth } = useContext(LocalContext) as AuthContextType;
	const [register, setRegister] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
	});

	const handleRegister = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		signup({ ...register });
	};

	useEffect(() => {
		if (auth) {
			router.push("/login");
		}
	}, [auth]);

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2>Create an account</h2>
				<form className={styles.form} onSubmit={handleRegister}>
					<div className={styles.inputBox}>
						<input
							type="text"
							placeholder="name"
							required
							value={register.name}
							onChange={(e) =>
								setRegister({ ...register, name: e.target.value })
							}
						/>
					</div>
					<div className={styles.inputBox}>
						<input
							type="text"
							placeholder="username"
							required
							value={register.username}
							onChange={(e) =>
								setRegister({ ...register, username: e.target.value })
							}
						/>
					</div>
					<div className={styles.inputBox}>
						<input
							type="text"
							placeholder="email"
							required
							value={register.email}
							onChange={(e) =>
								setRegister({ ...register, email: e.target.value })
							}
						/>
					</div>
					<div className={styles.inputBox}>
						<input
							type="password"
							placeholder="password"
							required
							value={register.password}
							onChange={(e) =>
								setRegister({ ...register, password: e.target.value })
							}
						/>
					</div>
					<div className={styles.policy}>
						<input type="checkbox" />
						<h3>I accept all terms & condition</h3>
					</div>
					<div className={`${styles.inputBox} ${styles.button}`}>
						<button>Register Now</button>
					</div>
					<div className={styles.text}>
						<h3>
							Already have an account? <a>Login now</a>
						</h3>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
