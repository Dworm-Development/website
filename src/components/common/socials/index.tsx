import React, { FC } from "react";
import styles from "./socials.module.css";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Telegram } from "../../../assets/icons/telegram.svg";
import { ReactComponent as Gitbook } from "../../../assets/icons/gitbook.svg";

const Socials: FC = () => {
  return (
    <div className={styles.social_links}>
      <a
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Twitter />
      </a>
      <a
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Telegram />
      </a>
      <a
        href="https://dworm-developments.gitbook.io/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Gitbook />
      </a>
    </div>
  );
};

export default Socials;
