fetch("https://dummyjson.com/products").then((response)=> response.json()).then((data)=>{
  let listData = data.products;
  let item = document.getElementById('item');
})