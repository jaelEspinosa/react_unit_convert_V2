/* eslint-disable react-hooks/exhaustive-deps */

import { useDispatch, useSelector } from "react-redux";
import { resetUnits, setLocalStorageFav, setOptions, setSelectedValue, toggleCmInches, toggleKmMiles, toggleMetersFeet } from "./store/slices/convert";
import FavoritesCard from "./components/favoritesCard";
import { useEffect, useRef } from "react";
import Calc from "./components/Calc";

function App() {
  const dispatch = useDispatch();
  const hasMounted = useRef(false);
  const { selectedValue, favorites } = useSelector((state) => state.convert);


  useEffect(() => {
    if (!hasMounted.current) {
      const favLocalStorage = JSON.parse(localStorage.getItem("favorites"));
      if (!favLocalStorage) return;
      dispatch(setLocalStorageFav(favLocalStorage));
      hasMounted.current = true;
    }
  }, []);

  const handleButtonClick = () => {
    selectedValue === "MilesToKm" && dispatch(setSelectedValue("KmToMiles")) && dispatch(toggleKmMiles());
    selectedValue === "KmToMiles" && dispatch(setSelectedValue("MilesToKm")) && dispatch(toggleKmMiles());
    selectedValue === "MetersToFeet" && dispatch(setSelectedValue("FeetToMeters")) && dispatch(toggleMetersFeet());
    selectedValue === "FeetToMeters" && dispatch(setSelectedValue("MetersToFeet")) && dispatch(toggleMetersFeet());
    selectedValue === "CmToInches" && dispatch(setSelectedValue("InchesToCm")) && dispatch(toggleCmInches());
    selectedValue === "InchesToCm" && dispatch(setSelectedValue("CmToInches")) && dispatch(toggleCmInches());
  };

  const hadleChange = (e) => {
    dispatch (resetUnits())
    dispatch(setSelectedValue(e.target.value));
    switch (e.target.value) {
      case "MilesToKm":
         dispatch( setOptions({unitOne: 'miles', unitTwo:'km', setUnit:'setKm', action: 'millasToKm'}))
         break;
      case "KmToMiles":
        dispatch( setOptions({unitOne: 'km', unitTwo:'miles', setUnit:'setMiles', action: 'millasToKm'}))
        break;
      case "MetersToFeet":
        dispatch( setOptions({unitOne: 'meters', unitTwo:'feet', setUnit:'setFeet', action: 'metersToFeet'}))
        break;
      case "FeetToMeters":
        dispatch( setOptions({unitOne: 'feet', unitTwo:'meters', setUnit:'setMeters', action: 'feetToMeters'}))
        break;
      case "CmToInches":
        dispatch( setOptions({unitOne: 'cm', unitTwo:'inches', setUnit:'setInch', action: 'cmToInch'}))
        break;
      case "InchesToCm":
        dispatch( setOptions({unitOne: 'inches', unitTwo:'cm', setUnit:'setCm', action: 'inchToCm'}))
        break;
      default:
        return null;
    }
  };

  return (
    <>
      <header className="header">
        <div>
          <i className="fa-sharp fa-solid fa-arrow-right-arrow-left"></i>
          <span className="span-header"> unit converter </span>
        </div>
      </header>

      <main>
        <div className="converter">
          <div className="select-section">
            <h4>convert</h4>
            <div className="select-group">
              <select
                className="select"
                id="conversor"
                onChange={hadleChange}
                value={selectedValue}
              >
                <option value="">Select</option>
                <option value="KmToMiles">Km &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Miles</option>
                <option value="MilesToKm">Miles &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Km</option>
                <option value="MetersToFeet">Meters &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Feet</option>
                <option value="FeetToMeters">Feet &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Meters</option>
                <option value="CmToInches">Cm &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Inches</option>
                <option value="InchesToCm">Inches &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Cm</option>
              </select>
              <p onClick={handleButtonClick} disabled={!selectedValue}>
                <i className="fa-sharp fa-solid fa-arrow-right-arrow-left"></i>
              </p>
            </div>
          </div>
          <Calc />
        </div>
        <div className="title-container">
        
          <h2 className="title-favorites">{favorites.length > 0  ? 'Saved' : ' Save your favorites '}</h2>
        
        </div>

        <div className="favorites-container">
          <div className="favorites-card">
            <FavoritesCard />
          </div>
        </div>
      </main>
      <footer className="footer">
        <span>Terms of service</span>
        <span>Privacy policy</span>
      </footer>
    </>
  );
}

export default App;
