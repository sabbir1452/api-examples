const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((data) => displayUsers(data.results));
};

const displayUsers = (users) => {
  const usersContainer = document.getElementById("users-container");
  for (const user of users) {
    console.log(user);
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `
    <h3>User Name</h3>
    <p>Email: ${user.email}</p>
    <p>User Location: ${user.location.city} Country: ${user.location.country}</p>
    
    `;
    usersContainer.appendChild(userDiv);
  }
};

loadUsers();
