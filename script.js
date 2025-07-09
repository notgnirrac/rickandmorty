async function render(fi, si) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${fi},${si}`)
    let data = await response.json()
    console.log(data)
    // Your code goes here
    fetch('https://rickandmortyapi.com/api/character/77,69')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

}

render(20, 35);
