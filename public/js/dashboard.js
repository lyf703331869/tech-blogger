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
document
  .querySelectorAll(".delete-btn")
  .forEach((elem) => elem.addEventListener("click", delButtonHandler));

const editButtonHandler = async (event) => {
  const id = event.target.getAttribute("data-id");
  document.location.replace(`/dashboard/edit/${id}`);
};

document
  .querySelectorAll(".edit-btn")
  .forEach((elem) => elem.addEventListener("click", editButtonHandler));

function addBlogHandler() {
  document.location.replace("/dashboard/new");
}

document.querySelector(".add-blog").addEventListener("click", addBlogHandler);
