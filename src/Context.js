import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [whatCountry, setWhatCountry] = useState("");
  const [querySearch, setQuerySearch] = useState("summary");
  const [covidTracker, setCovidTracker] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://api.covid19api.com/";

  const fetchData = async () => {
    const data = await fetch(`${url}${querySearch}`);
    const response = await data.json();
    const { Global } = response;
    setCovidTracker(Global);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [whatCountry]);

  return (
    <AppContext.Provider
      value={{ whatCountry, setWhatCountry, isLoading, covidTracker }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
