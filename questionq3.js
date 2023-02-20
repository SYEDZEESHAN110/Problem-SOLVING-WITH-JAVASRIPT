function formatNumber(number, decimalPlaces) {
    return Number(number.toFixed(decimalPlaces));
  }
  const num = 123.456789;
  console.log(formatNumber(num, 2)); 
   console.log(formatNumber(num, 4)); 