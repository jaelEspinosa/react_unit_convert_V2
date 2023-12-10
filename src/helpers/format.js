


export const formatUnit = ( unit ) => {
    
    const formattedUnits =
      parseFloat(unit) === parseInt(unit)
        ? parseInt(unit)
        : unit.toFixed(2);
    return formattedUnits;
  }