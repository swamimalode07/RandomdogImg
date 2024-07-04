
let url2="https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
   let link=await getImage();
   console.log(link);
let img=document.querySelector("#result");
img.setAttribute("src",link);

});

async function getImage(){
    try{
        let res=await axios.get(url2);
        return res.data.message;

    }catch(e){
        console.log("error is ",e);
        return "No image found";
    }

}



