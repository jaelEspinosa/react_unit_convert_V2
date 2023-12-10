import {  useDispatch, useSelector } from "react-redux"
import { deleteFavorites } from "../store/slices/convert";


const FavoritesCard = () => {
const dispatch = useDispatch();


const handleDelete = (fav)=> {
 dispatch( deleteFavorites(fav))
}
const { favorites } = useSelector((state) => state.convert);

  return (
    <>
      
      {favorites.map((fav, index) => (
        <div  className = 'item-card' key = {index}>
            <span>{fav}</span>
            <i className="fa-regular fa-x" onClick={()=>handleDelete(fav)}></i>
            
        </div>
      ))}
    </>
  )
}

export default FavoritesCard