import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
// Data Context Creator
const DataContext = createContext<{
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}>(null!);

// Data Context Data
const useDataContext = () => useContext(DataContext);

// Data Context Provider
const DataProvider = ({ children }: any) => {
  const [data, setData] = useState<any>({ loading: true });
  useEffect(() => {
    axios
      .get("http://192.168.0.195/user", {
        withCredentials: true,
      })
      .then(({ data }: any) => {
        if (data.email) setData({ loading: false, user: data });
      })
      .catch(() => {
        setData({ loading: false });
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { useDataContext, DataProvider };
