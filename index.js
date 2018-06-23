function createPost() {
  const page = document.getElementById('#age-template').value;
  var postTemplate = document.getElementById("post-template").value;
  var author = document.getElementById("postAuthor").value;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var templateFn = _.template(postTemplate);
  var postsDiv = document.getElementById("posts");
  var templateHTML = templateFn({ 'postBody': postBody, 'postAuthor': postAuthor });
  postsDiv.innerHTML += templateHTML;
}
