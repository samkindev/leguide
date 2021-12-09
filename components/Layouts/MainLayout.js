import AppBar from "../AppBar";
import homeStyles  from '../../styles/Home.module.css';
import Footer from "../Footer";

export default function MainLayout({ children }) {
	return (
		<>
			<AppBar />
			<main className={homeStyles.main} style={{ paddingTop: 70, width: '100vw' }}>{children}</main>
			<Footer />
		</>
	);
}
