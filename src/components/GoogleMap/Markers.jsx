import React, { useState, useEffect } from "react";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
// import useTime from "../../hooks/useTime";
import styles from "./GoogleMap.module.scss";

const Markers = ({ id = 10, $hover, description, distance, date }) => {
  // const { formatTime } = useTime();
  // const [eventTime, setEventTime] = useState("");
  // const renderTooltip = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     <p>
  //       {description}
  //       {distance && ` (${distance})`}
  //     </p>
  //     <p>{date && `${eventTime}`}</p>
  //   </Tooltip>
  // );

  // useEffect(() => {
  //   setEventTime(
  //     `${new Date(date).toDateString()} at ${formatTime(new Date(date))}`
  //   );
  // }, [date]);

  // const goToRun = (id) => {
  //   const element = document.getElementById(`run-${id}`);
  //   element.scrollIntoView();
  // };

  return (
    <div
      className={
        $hover ? `${styles.circle} ${styles.hover}` : `${styles.circle}`
      }
      // onClick={() => goToRun(id)}
    >
      <span className={styles.circleText}>{id}</span>
    </div>
  );
};

export default Markers;
