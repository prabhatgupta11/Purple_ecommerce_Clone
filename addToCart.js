
document.querySelector("#productBox")

var cartss = JSON.parse(localStorage.getItem("cartsItems")) || [];

var length=cartss.length
    document.querySelector("#cart").textContent =length;

var total=0;
primerobj.map(function(elem)
{
    console.log(elem.name);

    var div=document.createElement("div")
    var img = document.createElement("img");
        img.setAttribute("src", elem.image);
        img.addEventListener("click" ,function ()
        {
          productDetails();
        })
    
        var h2 = document.createElement("h5");
        h2.textContent = "Item Name:"+elem.name;

         var priceDiv=document.createElement("div");
        var price = document.createElement("h6");
        price.textContent = "Price:"+"₹"+elem.price;
        total=total +Number(elem.price);
       
        var strikeoff = document.createElement("h6");
        strikeoff.textContent = elem.strikeoff;

        var discount = document.createElement("h6");
        discount.textContent = elem.discount +"% off";
        
         
        var button = document.createElement("button");
        button.textContent = "Add To Cart";
        button.addEventListener("click", function () {
                  console.log(elem);
                  addToCart(elem);
                });
        priceDiv.append(price,strikeoff,discount,)
        img.append(button)
        div.append(img,h2,priceDiv,button)
       var x=document.querySelector("#productBox").append(div)
      

}); console.log(total)

document.querySelector("#cart").textContent =length;
function addToCart(elem) {

  cartss.push(elem);
  localStorage.setItem("cartsItems", JSON.stringify(cartss));
  var length=cartss.length
    document.querySelector("#cart").textContent =length;
  
}

function  productDetails()
{
  window.location.href = "product_desc.html";
}