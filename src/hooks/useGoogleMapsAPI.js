import axios from "axios";
import { useEffect, useState } from "react";

export default function useGoogleMapsAPI() {
  const getAPIKey = () => {
    return Promise.all([axios.get("/api/googlemapsapikey")])
      .then((response) => {
        const { key } = response[0].data;
        console.log("Key in the hook", key);
        return key;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { getAPIKey };
}
