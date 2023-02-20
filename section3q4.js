function calculateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const now = new Date();

  const ageInMilliseconds = now - dob;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30; // average month length in days
  const ageInYears = ageInMonths / 12;

  const years = Math.floor(ageInYears);
  const months = Math.floor((ageInYears - years) * 12);
  const days = Math.floor((ageInMonths - Math.floor(ageInMonths)) * 30);

  return { years, months, days };
}

// Example usage
const dob = '1998-08-24'; // YYYY-MM-DD format
const age = calculateAge(dob);
console.log(`You are ${age.years} years, ${age.months} months, and ${age.days} days old.`);
