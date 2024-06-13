export function getRandomCity() {
  const cities = [
    "Tokyo, Japan",
    "New York, USA",
    "Paris, France",
    "London, UK",
    "Sydney, Australia",
    "Cairo, Egypt",
    "Beijing, China",
    "Rio de Janeiro, Brazil",
    "Cape Town, South Africa",
    "Mexico City, Mexico",
  ];

  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}
