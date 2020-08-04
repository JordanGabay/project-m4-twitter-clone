import React, { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";


export default function Critterfeed() {
  const {
    currentUser: { handle },
  } = useContext(CurrentUserContext);
  const [critterFeed, setCritterFeed] = useState({});

  useEffect(() => {
    fetch(`/api/${handle}/feed`)
      .then((res) => res.json())
      .then(({ tweetsById }) => {
        console.log(tweetsById);
        setCritterFeed({ ...tweetsById });
      });
  }, []);

  return (
    <div>
      {Object.values(critterFeed).map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
			))}
    </div>
  );
}



