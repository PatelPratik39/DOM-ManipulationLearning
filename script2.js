// script.js
//

const names = ["Alice", "Bob", "Carol", "James", "Gordon", "Lisa", "Kviv"];
const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "QA",
  "Therapist",
  "Plumber",
  "Doctor"
];
let freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 },
  { name: "Kviv", occupation: "Doctor", startingPrice: 150 }
];

function renderFreelancers() {
  const table = document.getElementById("freelancerTable");
  // Clear existing table rows
  table.innerHTML =
    "<tr><th>Name</th><th>Occupation</th><th>Starting Price</th></tr>";

  // Populate table with freelancer data
  freelancers.forEach((freelancer) => {
    const row = table.insertRow();
    row.insertCell(0).textContent = freelancer.name;
    row.insertCell(1).textContent = freelancer.occupation;
    row.insertCell(2).textContent = `$${freelancer.startingPrice}`;
  });
}

function generateRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomStartingPrice = Math.floor(Math.random() * 100) + 1; // Random starting price between 1 and 100

  return {
    name: randomName,
    occupation: randomOccupation,
    startingPrice: randomStartingPrice
  };
}

function updateAverageMessage() {
  const averageStartingPrice = calculateAverageStartingPrice();
  const message = document.getElementById("averageMessage");
  message.textContent = `Average Starting Price: $${averageStartingPrice.toFixed(
    2
  )}`;
}

function calculateAverageStartingPrice() {
  const totalStartingPrice = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.startingPrice,
    0
  );
  return freelancers.length > 0 ? totalStartingPrice / freelancers.length : 0;
}

// Initial render
renderFreelancers();

// Interval to generate new freelancers
setInterval(() => {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  renderFreelancers();
  updateAverageMessage();
}, 1000); // Generate a new freelancer every 5 seconds
