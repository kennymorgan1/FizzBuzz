
window.onload = () => {
  document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault();
    let result;
    for(let i=1; i<=100; i++) {
      if((i%3===0) && (i%5===0)) {
        result = 'FizzBuzz';
      } else if (i%3 === 0) {
        result = 'Fizz'
      } else if (i%5 === 0) {
        result = 'Buzz'
      } else {
        result = i
      }
     let p = document.createElement("p");
    p.innerHTML = (result);
    document.getElementById('output').appendChild(p);
    }
    
  })

  document.getElementById('button1').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('output').innerHTML = '';
  })
}