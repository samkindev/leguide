import { useState, useEffect, useRef } from "react";
import styles from "./HomeBanner.module.css";
import { Button, Typography, Fade } from "@mui/material";
import { motivations } from "../../constants/data";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function HomeBanner() {
	const [active, setActive] = useState(0);
	const [next, setNext] = useState(true);
	const [back, setBack] = useState(true);
    const interval = useRef();

	const handleGoNext = () => {
		if (active < motivations.length - 1) {
			setActive(active + 1);
            if (interval.current) clearInterval(interval);
		}
	};

	const handleGoBack = () => {
		if (active > 0) {
			setActive(active - 1);
            if (interval.current) clearInterval(interval);
		}
	};

	useEffect(() => {
		if (active >= motivations.length - 1) {
			setNext(false);
			return;
		}

		if (active <= 0) {
			setBack(false);
			return;
		}

		setBack(true);
		setNext(true);
	}, [active]);

    useEffect(() => {
        interval.current = setInterval(() => {
            if (active < motivations.length - 1) {
                setActive(active + 1);
            } else {
                setActive(0);
            }
        }, 12000);

        return () => {
            if (interval.current)
                clearInterval(interval.current);
        }
    })
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				{motivations.map((motivation) => (
					<Fade in={active === motivation.id} key={motivation.id}>
						<Typography
							variant="body1"
							className={`${styles.motivation} ${
								active === motivation.id ? styles.active : ""
							}`}
						>
							{motivation.text}
						</Typography>
					</Fade>
				))}
			</div>
			{back && (
				<Button
					className={`${styles.action} ${styles.back}`}
					onClick={handleGoBack}
				>
					<ChevronLeft fontSize="large" htmlColor="#fff" />
				</Button>
			)}
			{next && (
				<Button
					className={`${styles.action} ${styles.next}`}
					onClick={handleGoNext}
				>
					<ChevronRight fontSize="large" htmlColor="#fff" />
				</Button>
			)}
		</div>
	);
}
