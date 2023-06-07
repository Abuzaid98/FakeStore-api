document.querySelector(".store").addEventListener("click", function () {
    fetch("https://fakestoreapi.com/products").then(i => i.json()).then(i => {
        // console.log(i)
        let alldata = "";
        i.map((i) => {
            alldata += `<div class="card"><p class="title"><span>${i.id}.</span> ${i.title}</p><div class="img-p"><img src=${i.image} alt=""></div><p class="description">${i.description}</p><h4 class="category">${i.category}</h4><h3 class="price"><a href="#">$ ${(i.price).toFixed(2)}</a><span><del>$ ${(i.price + 13).toFixed(2)}</del></span></h3></div> `
        })
        document.querySelector("#cards").innerHTML = alldata;
    })
})