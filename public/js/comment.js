const newCommentHandler = async (event) => {
  event.preventDefault();

  const comment_content = document.querySelector("#comment").value.trim();
  const blog_id = document.querySelector("#id").textContent;
  if (comment_content && blog_id) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment_content, blog_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/blog/${blog_id}`);
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector("#add-comment-form")
  .addEventListener("submit", newCommentHandler);
