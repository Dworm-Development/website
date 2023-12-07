import React from "react";
import RoadmapItem from "../roadmap-item";
import styles from "./roadmap.module.css";
import RoadMaps from "./roadmaps";

function RoadMap() {
  const roadmapItems = [
    {
      title: "Phase 1",
      pillColour: "#5C39B2",
      body: ["Staking V1 (Early-Bird)", "Staking V2 (Unleashed)"],
    },
    {
      title: "Phase 2",
      pillColour: "#F762DA",
      body: ["Farm (Touch-Grass)", "DEX"],
    },
    {
      title: "Phase 3",
      pillColour: "#57DCE5",
      body: ["Bridge", "Game"],
    },
  ];

  return (
    <section className={`${styles.container}`} id="roadmap">
      {/* <div className={`${styles.content}`}>
        <div className={styles.in__roadmap__container}>
          <RoadMaps />
        </div>
        <div className={`${styles.roadmap}`}>
          <div className="flex gap-32">
            <RoadmapItem />
            <RoadmapItem />
            <RoadmapItem />
          </div>
        </div>
      </div> */}
      <div className={styles.out__roadmap__container}>
        {roadmapItems.map((item, index) => (
          <RoadmapItem
            title={item.title}
            content={item.body}
            pillColour={item.pillColour}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default RoadMap;
