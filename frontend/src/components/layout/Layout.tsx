import React, { ReactNode } from "react";
import { Meta } from "../Meta";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
	children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Header />
			{children}
			<Footer />
		</>
	);
};
