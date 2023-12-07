import React from "react";
import styles from "./features.module.css";
import SpaceshipIcon from "../../../assets/image/dworm/spaceship.svg";
import Button from "../../common/nnbutton";

function Features() {
  const features: { title: string; description: string }[] = [
    {
      title: "Staking V1 (Early-Bird)",
      description:
        "The Early-Bird is a simple staking Dapp that primarily encourages holding by rewarding long-term and loyal Dworm hodlers. Users earn more Dworm by depositing Dworm tokens into the staking pool. Early-Bird is a fixed APR pool and will expire at a determined date.",
    },
    {
      title: "Staking V2 (Unleashed)",
      description:
        "The Unleashed pool is our advanced fixed and flexible pool, where users can select a package that works for them. Similar to Early-Bird, Unleash rewards loyal and long-term hodlers of Dworm. However, unlike Early-Bird, Unleash pool participants will be entered into a Raffle draw to take home the Jackpot reward.",
    },
    {
      title: "Farm (Touch-Grass)",
      description:
        "With Touch-Grass, users stake Dworm/ETH lp tokens to earn voting power. Creating Dworm/Eth LP deepens the Liquidity of Dworm to prevent massive price fluctuation, effectively ensuring a stable price movement for Dworm. Touch-Grass provides yet another way for our holders to earn more Dworm tokens. Farmers get vDworm proportional to their lp amount and lock duration (14 days, 30 days, three months, one year, up to 4eyars). vDworm is a non-transferable governance token used to vote on tokens that should be accepted for Deworming.",
    },
  ];
  return (
    <>
      <section className={`${styles.container}`} id="about">
        <div className={`${styles.content} max-width`}>
          <div className="flex flex-col pt-16 items-center md:justify-start justify-center">
            <h2 className="font-freude-reg xl:freude-64 freude-48 uppercase">
              What is Dworm?
            </h2>
            <p className="lato-20 w-full md:w-1/2 text-center text-justify">
              Unlock the potential of Dworm's utility ecosystem: Dive into
              Staking V1 & V2 for tailored rewards. Explore Pools for flexible
              deposits and Farm (Touch-Grass) to stake LP tokens, ensuring
              stability. As a vDworm holder, you wield influence, earning fee
              rewards and shaping Dworm's dynamic future. Join us on the journey
              of seamless and rewarding DeFi experiences.
            </p>
          </div>
          <div className="pt-16 text-center">
            <h2 className="font-freude-reg xl:freude-64 freude-48 uppercase">
              DWORM Utilities
            </h2>
          </div>
          <div className={`${styles.features}`}>
            {features.map(({ title, description }, i) => (
              <div key={i} className={`${styles.feature}`}>
                <div className={`${styles.content__left}`}>
                  <img src={SpaceshipIcon} className="h-24 w-24" alt="" />
                </div>
                <div className={`${styles.content__right}`}>
                  <div className={`${styles.heading}`}>{title}</div>
                  <div className={`${styles.description}`}>{description}</div>
                </div>
              </div>
            ))}
          </div>
          <Button
            href="#"
            buttonAs="a"
            target="_blank"
            buttonType="secondary"
            className="w-40 mt-48"
          >
            Buy DWORM
          </Button>
        </div>
      </section>
    </>
  );
}

export default Features;
