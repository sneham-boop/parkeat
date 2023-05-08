import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import styles from "./GoogleMap.module.scss";
import Map from "./Map";

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <h2>Loading</h2>;

    case Status.FAILURE:
      return <h2>Failure</h2>;

    case Status.SUCCESS:
      return <Map />;
  }
};

export default function GoogleMap() {
  return (
    <>
      <section className={styles.googleMap}>
        <Wrapper
          apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}
          version="beta"
          libraries={["marker"]}
          render={render}
        >
          <Map />
        </Wrapper>
      </section>
    </>
  );
}
