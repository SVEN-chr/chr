var posts=["2024/04/06/Microsoft  Activation  Scripts (MAS)/","2024/04/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };