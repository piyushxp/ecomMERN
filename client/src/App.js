import React from "react";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
	return (
		<>
			<Header />
			<main className="py-3">
      <Footer />
      </main>
		</>
	);
};

export default App;
