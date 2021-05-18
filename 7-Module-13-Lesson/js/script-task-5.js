/**
 * Set class 'red-score' to score under 10
 * Set class 'green-score' to other score
 */


 const table = document.querySelector('table');

 const lines = table.querySelectorAll('td');
 lines.forEach(line => {
     const innerInt = parseInt(line.innerText);
     if( !isNaN(innerInt)) {
         if(innerInt < 10) {
            line.classList.add('red-score');
         } else {
            line.classList.add('green-score');
         }
     }
 })