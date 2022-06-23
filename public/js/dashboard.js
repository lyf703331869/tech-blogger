// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector("#project-name").value.trim();
//   const needed_funding = document
//     .querySelector("#project-funding")
//     .value.trim();
//   const description = document.querySelector("#project-desc").value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: "POST",
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert("Failed to create project");
//     }
//   }
// };

const delButtonHandler = async (event) => {
  let answer = confirm("Are you sure to delect this blog?");
  if (answer) {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to delete blogs");
      }
    }
  }
};

// document
//   .querySelector(".new-project-form")
//   .addEventListener("submit", newFormHandler);

document
  .querySelectorAll(".delete-btn")
  .forEach((elem) => elem.addEventListener("click", delButtonHandler));
