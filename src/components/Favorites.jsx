/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addToFavorites, resetUnits } from "../store/slices/convert";






const Favorites = ({favorite}) => {
    
    const dispatch = useDispatch();
  


const handleFavorite = () =>{
    if(!favorite) return;
    dispatch( addToFavorites(favorite));
    dispatch( resetUnits())
    
}

  return (
    <div className="favorites-section">
            <a onClick={()=> handleFavorite()}>
              <i className="fa-regular fa-heart"></i>
            </a>
    </div>
  )
}


export default Favorites