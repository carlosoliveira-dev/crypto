const response = await fetch("http://localhost:3000/cadastrar", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // …
});