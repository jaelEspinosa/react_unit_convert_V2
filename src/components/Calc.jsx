import { useDispatch, useSelector } from "react-redux";
import { cmToInch, feetToMeters, inchToCm, kmToMillas, metersToFeet, millasToKm, setCm, setFeet, setInch, setInputValue, setKm, setMeters, setMiles } from "../store/slices/convert";
import { formatUnit } from "../helpers";
import Favorites from "./Favorites";



const Calc = () => {
  const dispatch = useDispatch();
  const { inches, cm, feet, meters, km, miles,  options, selectedValue, inputValue } = useSelector(state => state.convert);
  const {unitOne, unitTwo } = options;
  
  const hadleInputChange = (e) =>{
    const newNumber = e.target.value;  
     dispatch (setInputValue(Number(newNumber)))
    
    switch(selectedValue) {

      case 'KmToMiles':        
        dispatch( setKm(newNumber));
        dispatch( kmToMillas(newNumber));           
        break;
      case 'MilesToKm':        
        dispatch( setMiles(newNumber));
        dispatch( millasToKm(newNumber));           
        break;  
      case 'CmToInches':
        dispatch ( setCm(newNumber))
        dispatch ( cmToInch(newNumber))
        break;
      case 'InchesToCm':
        dispatch ( setInch(newNumber))
        dispatch ( inchToCm(newNumber))
        break;  
      case 'MetersToFeet':
        dispatch ( setMeters(newNumber))
        dispatch ( metersToFeet(newNumber))
        break;
      case 'FeetToMeters':
        dispatch ( setFeet(newNumber))
        dispatch ( feetToMeters(newNumber))
        break;    

      default:
        return null;  
      }

  }
  
  return (
    <div className="input-section">
     {
     selectedValue && <>

     <div className="input-group">
        <input
          id="unit"
          name="unit"
          className="input"
          type="number"
          value = { inputValue === 0 ? '' : formatUnit(inputValue) } 
          onChange={hadleInputChange}
        />
        <span>{unitOne}</span>
      </div>

      <div className="result">
        <h2>{
             selectedValue === 'CmToInches' ? formatUnit(inches) : 
             selectedValue === 'InchesToCm' ? formatUnit(cm) : 
             selectedValue === 'KmToMiles' ? formatUnit(miles) :
             selectedValue === 'MilesToKm' ? formatUnit(km) :
             selectedValue === 'MetersToFeet' ? formatUnit(feet) :
             selectedValue === 'FeetToMeters' ? formatUnit(meters) : ''
        
            } </h2>
        <span>{unitTwo}</span>
      </div>
      { inches > 0 && selectedValue === 'CmToInches' ? <Favorites favorite={`${formatUnit(cm)} ${unitOne}     →     ${formatUnit(inches)} ${unitTwo}`}/> :
        inches > 0 && selectedValue === 'InchesToCm' ? <Favorites favorite={`${formatUnit(inches)} ${unitOne}     →     ${formatUnit(cm)} ${unitTwo}`}/> :
        km > 0 && selectedValue === 'KmToMiles' ? <Favorites favorite={`${formatUnit(km)} ${unitOne}     →     ${formatUnit(miles)} ${unitTwo}`}/> :
        km > 0 && selectedValue === 'MilesToKm' ? <Favorites favorite={`${formatUnit(miles)} ${unitOne}     →     ${formatUnit(km)} ${unitTwo}`}/> :
        feet > 0 && selectedValue === 'FeetToMeters' ? <Favorites favorite={`${formatUnit(feet)} ${unitOne}     →     ${formatUnit(meters)} ${unitTwo}`}/> :
        feet > 0 && selectedValue === 'MetersToFeet' ? <Favorites favorite={`${formatUnit(meters)} ${unitOne}     →     ${formatUnit(feet)} ${unitTwo}`}/> :
       
       <Favorites />}
       </>
     } 

    </div>    
  )
}

export default Calc