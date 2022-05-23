//store the products array in localstorage as "products"

let arr=JSON.parse(localStorage.getItem("products")) ||[]

function product(type,desc,price,image){
    this.type=type,
    this.desc=desc,
    this.price=price,
    this.image=image
}

function Myfun(event)
{
    event.preventDefault();
    let form=document.getElementById("products")


    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let productlist=new product(type,desc,price,image);

    
    // console.log(productlist)
    arr.push(productlist)
    // console.log(arr)
    localStorage.setItem("products",JSON.stringify(arr));
    window.location.reload()
}