import { useState } from "react";

const useFetching = (callback) => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setLoader(true);
      await callback();
    } catch (e) {
      setError(e.message);
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  return [fetching, loader, error];
};

export default useFetching;
