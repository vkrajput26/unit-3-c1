var arr=JSON.parse(localStorage.getItem("products")) ||[]
console.log(arr)
arr.map(function(elm,index){

        let product=document.getElementById("all_products");

    let box=document.createElement("div");

    let type=document.createElement("p");
    type.innerText=elm.type
    
    let desc=document.createElement("p");
    desc.innerText=elm.desc;

    let price=document.createElement("p")
    price.innerText=elm.price;

    let image=document.createElement("img")
    image.src=elm.image;

    let remove=document.createElement("button")
    remove.innerText=`Remove`;
    remove.setAttribute("id","remove_product")
    remove.addEventListener("click",function(){
        removefun(elm,index)
    })

    box.append(image,type,desc,price,remove)

    product.append(box)


})

function  removefun(elm,index)
{
        arr.splice(index,1)
        localStorage.setItem("products",JSON.stringify(arr));
        window.location.reload()
}