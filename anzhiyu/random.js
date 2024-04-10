var posts=["2024/04/06/Microsoft  Activation  Scripts (MAS)/","2024/04/04/hello-world/","2024/04/08/Scoop/","2024/04/06/kali的常用命令/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };