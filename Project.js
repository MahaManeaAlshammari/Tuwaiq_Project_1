  const Name = $("#name");
  const Img = $("#img");
  const Price = $("#price");
  const Div = $("#div");
  const DivX = $("#divX");

const FoodArray =[
    {NameFood : "خبز " , ImgFood: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBU782kuclKH7VYqPBhAQCYLjVvL5gikr7iw&usqp=CAU" , priceFood: "3 RS"} ,
    {NameFood : " مشروب صحي" , ImgFood: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfX9tlh7bQXYnOPo1kbLW78F0CirmGUSORAg&usqp=CAU" , priceFood: "9RS"},
    {NameFood : " سناك" , ImgFood: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SkxuKH9hUYn-r2ueQOA6ZR2BvGCKtFBE8g&usqp=CAU" , priceFood: "12 RS"}, 
    {NameFood : " كوكيز" , ImgFood: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrPS-99DSMWQHt-RsN1eqqZr_Ch-TvuFgtA&usqp=CAU" , priceFood: "12 RS"},
];

function renderArr(array) {
    for (let i = 0; i < array.length; i++) {
      const div =
       $(`<div">
          <img src="${array[i].ImgFood}" >
          <button id="del" onclick="deleteFoodAray (${i})">حذف</button>
          <h2>${array[i].NameFood}</h1>
          <p>${array[i].priceFood}</p>
          </div>`); 
Div.append(div);
    }
  }

  renderArr(FoodArray);

function addFood() {
    const newFood = {
        NameFood: Name.val(),
        ImgFood: Img.val(),
        priceFood: Price.val(),
    };
    FoodArray.push(newFood);
    renderArr([newFood]);
}
 

DivX.hide();
function showHandler() {
    DivX.show();
  }
  

function deleteFoodAray(indexx){
  FoodArray.splice(indexx,1);
  Div.html("");
  renderArr(FoodArray); 
  
}










