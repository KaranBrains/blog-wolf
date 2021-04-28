import React, { useContext, useEffect, useState } from "react";
import Calendar from "./../EntreeLite/Calendar";
import OverView from "./../EntreeLite/OverView";
import EntreeLiteContext from "./../../context/EntreeLite/EntreeLiteContext";
// import Test from "./../EntreeLite/Test";

const Home = (props) => {
  const unitId = props.match.params.id;
  const [showResults, setShowResults] = useState(true);
  const onClick = () => {
    getGuests(unitId);
    setShowResults(false);
  };
  const onClick1 = () => {
    getGuests(unitId);
    setTimeout(() => {
      setShowResults(true);
    }, 500);
  };
  const entreeLiteContext = useContext(EntreeLiteContext);
  const {
    getGuests,
    guestFun,
    guests,
    upcomingGuests,
    upcoming,
  } = entreeLiteContext;
  console.log(guests, 5656565);
  useEffect(() => {
    guestFun();
    getGuests(unitId);
    upcomingGuests(unitId);
  }, []);

  return (
    <div>
      <div>
        <div className="row" style={{ flexWrap: "inherit" }}>
          <div className="col-sm-3">
            <h2 style={{ cursor: "pointer", color: "#ff5249" }}>
              <span onClick={onClick1}>Calendar</span>
            </h2>
          </div>
          <div className="col-sm-6"></div>
          <div className="col-sm-3">
            <h2 style={{ cursor: "pointer", color: "#ff5249" }}>
              <span onClick={onClick}>Overview</span>
            </h2>
          </div>
        </div>
        <hr />
        {showResults ? (
          <Calendar guests={guests} />
        ) : (
          <OverView guests={upcoming} />
        )}
      </div>
    </div>
  );
};

export default Home;
