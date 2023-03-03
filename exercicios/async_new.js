const [response1, response2, response3] = await Promise.all([
  firstPromiseCall(),
  secondPromiseCall(),
  thirdPromiseCall(),
]);

console.log(response1, response2, response3);