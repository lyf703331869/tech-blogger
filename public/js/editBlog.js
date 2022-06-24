const oldBlogHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#blog-title").value.trim();
  const content = document.querySelector("#blog-content").value.trim();
  const id = document.querySelector("#blog-id").textContent;

  console.log("Title is: ", title);
  console.log("content is", content);
  console.log("Id is", id);

  if (title && content && id) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({ id, title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert("Failed to update blog");
    }
  }
};

// when user click on submit button, fetch put request to update the current blog
document
  .querySelector(".edit-blog-form")
  .addEventListener("submit", oldBlogHandler);
