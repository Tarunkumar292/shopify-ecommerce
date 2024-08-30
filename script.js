// Add styling to script.js
console.log('Adding styling...');
document.body.style.backgroundColor = 'lightblue';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.padding = '20px';
// Add additional styling to script.js for products
console.log('Adding product-specific styling...');
document.body.style.color = 'black';
document.body.style.fontSize = '16px';
document.body.style.margin = '0 auto';
// Insert image of products from browser
console.log('Inserting img of products from browser...');
let img = document.createElement('img');
img.src = 'assets/images/product1.png';
document.body.appendChild(img);