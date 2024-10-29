const product = [
{
    id: 0,
    image: '1.jpg',
    title: 'Caramel Macchiato',
    price: 135,
  },
{
    id: 1,
    image: '2.jpg',
    title: 'Flat White',
    price: 100,
  },
{
    id: 2,
    image: '3.jpg',
    title: 'Black Coffee',
    price: 150,
  },
{
    id: 3,
    image: '4.jpg',
    title: 'Cappuccino',
    price: 160,
  },
{
    id: 4,
    image: '5.jpg',
    title: 'Americano',
    price: 200,
  },  
  {
    id: 0,
    image: '6.jpg',
    title: 'Iced Caramel Latte',
    price: 130,
  },
{
    id: 1,
    image: '7.jpg',
    title: 'Cold Brew',
    price: 140,
  },
{
    id: 2,
    image: '8.jpg',
    title: 'Iced Mocha',
    price: 100,
  },
{
    id: 3,
    image: '9.jpg',
    title: 'Coffee Ice Cream Frappe',
    price: 150,
  },
{
    id: 4,
    image: '10.jpg',
    title: 'Iced Coffee',
    price: 155,
  },  
  {
    id: 0,
    image: '11.jpg',
    title: 'Matcha Frappuccino',
    price: 200,
  },
{
    id: 1,
    image: '12.jpg',
    title: 'Caramel Frappuccino',
    price: 170,
  },
{
    id: 2,
    image: '13.jpg',
    title: 'Mocha Frappuccino',
    price: 180,
  },
{
    id: 3,
    image: '14.jpg',
    title: 'Java Chip Frappuccino',
    price: 150,
  },
{
    id: 4,
    image: '15.jpg',
    title: 'Strawberry Frappuccino',
    price: 140,
  },  
  ];
  const categories = [...new Set(product.map((item) => 
  {return item;}))]
  let i=0;
document.getElementById('root').innerHTML = categories.map((item) => 
{
    var {image, title, price} = item;
    return(
	`<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p> 
        <h2>₱ ${price}.00</h2>`+
	    "<button onclick='addtocart("+(i++)+") '>Add to cart </button>"+ 
	        `</div> 
			</div>`
	)
}).join('')
var cart =[];

function addtocart(a){
	cart.push({...categories[a]});
	displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}	

function displaycart(){
let j = 0, total=0;
document.getElementById("count").innerHTML=cart.length;
if(cart.length==0){
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
	document.getElementById('total').innerHTML = "₱ "+0+".00";
}
else{
    document.getElementById("cartItem").innerHTML = cart.map((items)=>
{
var {image, title, price} = items;
total=total+price;
document.getElementById("total").innerHTML = "₱ "+total+".00";
return(
`<div class='cart-item'>
<div class='row-img'> 
<img class='rowimg' src=${image}>
</div>
<p style='font-size:12px'>${title}</p>
<h2 style='font-size:1 15x'>₱ ${price}.00</h2>`+
"<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
);
}).join('');
}
}


