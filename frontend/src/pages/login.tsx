import React, { FormEvent, useState, useContext, useEffect } from "react";
import styles from "@/styles/Auth.module.scss";
import { useRouter } from "next/router";
import { LocalContext, AuthContextType } from "@/context/LocalStorageContext";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const LogIn = () => {
	const router = useRouter();
	const [logInForm, setLogInForm] = useState({ email: "", password: "" });
	const { login, auth } = useContext(LocalContext) as AuthContextType;

	const handleLogIn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		login({ ...logInForm });
	};

	useEffect(() => {
		if (auth) {
			router.push("/");
		}
	}, [auth]);

	async function handleGoogleSignIn() {
		signIn("google", { callbackUrl: "http://localhost:3000" });
	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2>Create an account</h2>
				<form className={styles.form} onSubmit={(e) => handleLogIn(e)}>
					<div className={styles.inputBox}>
						<input
							type="text"
							placeholder="email"
							required
							value={logInForm.email}
							onChange={(e) =>
								setLogInForm({ ...logInForm, email: e.target.value })
							}
						/>
					</div>
					<div className={styles.inputBox}>
						<input
							type="password"
							placeholder="password"
							required
							value={logInForm.password}
							onChange={(e) =>
								setLogInForm({ ...logInForm, password: e.target.value })
							}
						/>
					</div>
					<div className={`${styles.inputBox} ${styles.button}`}>
						<button>Log In</button>
					</div>
					<div className={styles.inputButton}>
						<button className={styles.google} onClick={handleGoogleSignIn}>
							Sign in with Google
							<FcGoogle size={20} />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LogIn;
