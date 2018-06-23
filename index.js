function createPost() {
  var post = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  var postTemplate = document.getElementById("comment-template").innerHTML;

  //create template function
  var templateFn = _.template(postTemplate);

  var postsDiv = document.getElementById("post-template");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
