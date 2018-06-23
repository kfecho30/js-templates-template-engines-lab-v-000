function createPost() {
  const page = _.template(document.getElementById('page-template').innerHTML);
  const postTemplate = _.template(document.getElementById("post-template").innerHTML);;
  const postTitle = document.getElementById('postTitle').value;
  const postBody = document.getElementById('postBody').value;
  const postAuthor = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  const blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });
}
