import { useState, useEffect } from "react";

const useAsync = <T>(func: Function, deps: any[] = []) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await func();
        console.log(data, deps);

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, deps);

  return { isLoading, data, error };
};

export { useAsync };
