import { createSlice } from '@reduxjs/toolkit'



export const convertSlice = createSlice({
  name: 'convert',
  initialState : {
       inches: 0,
       feet: 0,
       meters:0,
       km: 0,
       miles: 0,
       cm: 0,
       inputValue: 0,
       selectedValue: '',
       favorites:[],
       options:{
        unitOne:'',
        unitTwo:'',
        setUnit:'',
        action:''

       }
  },
  reducers: {
   toggleKmMiles: ( state ) =>{
    if(state.selectedValue === 'MilesToKm'){
      state.inputValue = state.miles;
      const unitCont = state.options.unitOne;
      state.options.unitOne = state.options.unitTwo;
      state.options.unitTwo = unitCont;
    }
    if(state.selectedValue === 'KmToMiles'){
      state.inputValue = state.km;
      const unitCont = state.options.unitOne;
      state.options.unitOne = state.options.unitTwo;
      state.options.unitTwo = unitCont;
    }

   },
   toggleMetersFeet: ( state ) =>{
    if(state.selectedValue === 'MetersToFeet'){
      state.inputValue = state.meters;     
      const unitCont = state.options.unitOne;
      state.options.unitOne = state.options.unitTwo;
      state.options.unitTwo = unitCont;
    }
    if(state.selectedValue === 'FeetToMeters'){
      state.inputValue = state.feet;      
      const unitCont = state.options.unitOne;
      state.options.unitOne = state.options.unitTwo;
      state.options.unitTwo = unitCont;
    }

   },

   toggleCmInches: ( state ) =>{
    if(state.selectedValue === 'InchesToCm'){
      state.inputValue = state.inches;      
      const unitCont = state.options.unitOne;
      state.options.unitOne = state.options.unitTwo;
      state.options.unitTwo = unitCont
    }
    if(state.selectedValue === 'CmToInches'){
      state.inputValue = state.cm;     
      const unitCont = state.options.unitOne;
      state.options.unitOne = state.options.unitTwo;
      state.options.unitTwo = unitCont;
    }

   },
   
   
   setInputValue: ( state, action) =>{
    state.inputValue = action.payload
   }, 

   setOptions: ( state, action ) => {
    state.options = action.payload
   }, 
 
   kmToMillas : ( state, action) =>{
    state.miles = action.payload / 1.609344;
   },   
   
   millasToKm : (state, action) => {
    state.km = action.payload * 1.609344;
   },

   setKm : (state, action) =>{
    state.km = Number (action.payload);
   },

   setMiles: (state, action) =>{
    state.miles = Number (action.payload);
   },

   metersToFeet: (state, action) =>{
    state.feet = action.payload * 3.28084;
   },

   feetToMeters: (state, action) =>{
    state.meters = action.payload / 3.28084;
   },
  
   setFeet: (state, action) =>{
    state.feet = Number (action.payload);
   },
   setMeters: (state, action) =>{
    state.meters = Number (action.payload);
   },

   cmToInch: (state, action) => {
    state.inches = action.payload / 2.54
   },
   inchToCm: (state, action) => {
    state.cm = action.payload * 2.54
   },
   setCm:( state, action) => {
     state.cm = Number (action.payload)
   },
   setInch:( state, action ) =>{
     state.inches = Number (action.payload)
   },

   setSelectedValue: (state,action) => {
    state.selectedValue = action.payload
   },

   addToFavorites: ( state, action ) => {    
     state.favorites.push(action.payload);
     localStorage.setItem('favorites', JSON.stringify(state.favorites))
     
    },

   deleteFavorites: ( state, action ) => {
    const newFavorites = state.favorites.filter(fav => fav !== action.payload);
    state.favorites = newFavorites;
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
   },

   setLocalStorageFav: ( state, action ) => {
    const favorites = action.payload
    favorites.forEach(fav => state.favorites.push(fav));
   },
   
   resetUnits:  (state ) => {
    state.inputValue= 0;
    state.inches= 0;
    state.feet= 0;
    state.meters=0;
    state.km= 0;
    state.miles= 0;
    state.cm= 0;
   }

}


});


export const {  setOptions,
                addToFavorites,
                cmToInch,
                deleteFavorites,
                feetToMeters,
                inchToCm,
                kmToMillas, 
                metersToFeet, 
                millasToKm, 
                resetUnits,
                setCm,
                setFeet,
                setInch,
                setKm, 
                setLocalStorageFav,
                setMeters,
                setMiles, 
                setSelectedValue,
                setInputValue,
                toggleKmMiles,
                toggleMetersFeet,
                toggleCmInches

              } = convertSlice.actions