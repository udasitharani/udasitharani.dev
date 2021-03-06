import React, { useContext } from "react";
import AppReferenceContext from "../../context/AppReferenceContext";
import ContactButton from "../ContactButton/ContactButton";
import styles from "./AboutMe.module.css";
import SocialLink from "../SocialLink/SocialLink";
import GithubSVG from "../../static/github.svg";
import GmailSVG from "../../static/gmail.svg";
import InstagramSVG from "../../static/instagram.svg";
import LinkedInSVG from "../../static/linkedin.svg";
import MediumSVG from "../../static/medium.svg";
import TelegramSVG from "../../static/telegram.svg";
import TwitterSVG from "../../static/twitter.svg";

const AboutMe = () => {
	const { AboutMeRef, MyWorkRef } = useContext(AppReferenceContext);

	const scrollToWork = (event) => {
		console.log(MyWorkRef.current.offsetTop);
		window.scrollTo(0, MyWorkRef.current.offsetTop);
	};

	return (
		<div className={styles.aboutMe} ref={AboutMeRef}>
			<div className={styles.aboutHeader}>A little bit about Myself</div>
			<div className={styles.aboutText}>
				I use vim. My favourite frontend web framework is Reactjs. I like
				Node.js and Go for the backend. For mobile, I love Flutter.
			</div>
			<div className={styles.aboutLinks}>
				<SocialLink
					imgSrc={GmailSVG}
					to="mailto: me@udasitharani.dev"
					platformName="Gmail"
				/>
				<SocialLink
					to="https://www.instagram.com/udasi.tharani/"
					imgSrc={InstagramSVG}
					platformName="Instagram"
				/>
				<SocialLink
					to="https://www.linkedin.com/in/udasi-tharani-bb3232193/"
					imgSrc={LinkedInSVG}
					platformName="LinkedIn"
				/>
				<SocialLink
					to="https://t.me/udasitharani"
					imgSrc={TelegramSVG}
					platformName="Telegram"
				/>
				<SocialLink
					to="https://medium.com/@udasitharani"
					imgSrc={MediumSVG}
					platformName="Medium"
				/>
				<SocialLink
					to="https://github.com/udasitharani"
					imgSrc={GithubSVG}
					platformName="Github"
				/>
				<SocialLink
					to="https://twitter.com/TharaniUdasi"
					imgSrc={TwitterSVG}
					platformName="Twitter"
				/>
			</div>
			<ContactButton text="My Work" handleClick={scrollToWork} />
		</div>
	);
};

export default AboutMe;
