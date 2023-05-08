import React, { ReactNode } from "react";
import { Meta } from "../Meta";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useSession } from "next-auth/react";

type Props = {
	children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
	const { data: session } = useSession();
	return (
		<>
			<Meta />
			<Header />
			{children}
			<Footer />
		</>
	);
};
