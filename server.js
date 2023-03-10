const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><body><h1>This is a home page</h1></body></html>");
    res.end();
  } else if (req.url === "/name") {
    res.write(
      "<html><body><h1>My name is Andrew</h1><p>I like pies!</p></body></html>"
    );
    res.end();
  } else {
    res.write("404 Not Found");
    res.end();
  }
});

server.listen(4000, "localhost", () => {
  console.log("listening for requests on port 4000");
});

// 6) BONUS rewrite the code using writeHead and define content type, then put html elements directly in the end statement to give your content
// some style and structure
