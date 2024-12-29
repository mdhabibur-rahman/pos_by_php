function formatDateTime(date) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const period = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12; // Convert to 12-hour format

  return `${month} ${day}, ${year} ${hours}:${minutes}${period}`;
}

// Example usage
const now = new Date();
const formattedDate = formatDateTime(now);

// Update the .timeAndDate element with the formatted date
document.querySelector('.timeAndDate').textContent = formattedDate;
