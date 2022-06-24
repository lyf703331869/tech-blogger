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
//when user click delete button in dashboard, fetch delete request
document
  .querySelectorAll(".delete-btn")
  .forEach((elem) => elem.addEventListener("click", delButtonHandler));

const editButtonHandler = async (event) => {
  const id = event.target.getAttribute("data-id");
  document.location.replace(`/dashboard/edit/${id}`);
};

//when user click on edit button, in dashboard, direct page to editing blog page
document
  .querySelectorAll(".edit-btn")
  .forEach((elem) => elem.addEventListener("click", editButtonHandler));

function addBlogHandler() {
  document.location.replace("/dashboard/new");
}
//when user click on add blog button, direct page to adding blog page.
document.querySelector(".add-blog").addEventListener("click", addBlogHandler);
