import { useState, useEffect } from "react";

export const useHash = () => {
  const [hash, setHash] = useState(window.location.hash);

  const onHashChange = () => {
    setHash(window.location.hash);
  };

  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
};
