import React, { createContext, useEffect, useState, useContext } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        posts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
