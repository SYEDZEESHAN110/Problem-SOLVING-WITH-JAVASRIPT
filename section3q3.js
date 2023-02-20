function sumInteriorAngles(a) {
    const sum = (a - 4) * 180;
    return sum;
  }
  

  const a = 6;
  const sum = sumInteriorAngles(a);
  console.log(`The sum of interior angles of a ${a}-sided polygon is ${sum} degrees.`);
  