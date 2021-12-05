import React, { useEffect, useState } from "react";
import faker from "faker";

function Faker() {
    const [peoples, setPeoples] = useState([]);
    useEffect(() => {
      const peoples = [...Array(4)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
      }));
      setPeoples(peoples);
    }, []);
  return (
    <div>
      <h1>Hello</h1>
      {/*  list of stories */}
      {peoples.map((profile) => (
        <div>
          <h1>{profile.id}</h1>
          <img src={profile.avatar} />
          <p>{profile.username}</p>
        </div>
      ))}
    </div>
  );
}

export default Faker;
