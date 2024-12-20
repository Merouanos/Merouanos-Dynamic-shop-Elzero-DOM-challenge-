document.body.className="bg-slate-200";
let header=document.createElement("header");
header.classList.add("bg-white");


let container=document.createElement("div");
container.classList.add("w-3/4","mx-auto");


let mycontainer=container.cloneNode();
let div=document.createElement("div");
let ul = document.createElement("ul");
ul.classList.add("flex","gap-5","text-gray-400");
let nav =document.createElement("nav");
let li=document.createElement("li");


let copy=div.cloneNode();
copy.className="text-green-600 font-bold text-2xl";
copy.innerHTML="Merouanos";

let info=["Home","About","Service","Contract"];

for(let i=0;i<info.length;i++)
{
  myli=li.cloneNode();
  let text=document.createTextNode(`${info[i]}`);
  myli.appendChild(text);
  ul.appendChild(myli);
}

mycontainer.classList.add("py-5","justify-between","items-center","flex");
nav.appendChild(ul);
header.appendChild(mycontainer);
mycontainer.appendChild(nav);
mycontainer.prepend(copy);
document.body.appendChild(header);





let main =document.createElement("main");
main.className="mt-5";
let span=document.createElement("span");
mycontainer=container.cloneNode();
mycontainer.classList.add("grid","grid-cols-3","gap-5");

let length=15;
for(let i=0;i<length;i++)
{
  copy=div.cloneNode();
  copy.className="text-center py-5 bg-white flex flex-col ";
  let myspan=span.cloneNode();
  myspan.className="text-3xl";
  myspan.innerHTML=`${i+1}`;
  copy.appendChild(myspan);
  myspan=span.cloneNode();
  myspan.className="text-sm text-gray-400 mt-2";
  myspan.innerHTML=`Product`;
  copy.appendChild(myspan);
  mycontainer.appendChild(copy);

}
main.appendChild(mycontainer);
header.after(main);


let footer=document.createElement("footer");
footer.className="bg-green-600 py-5 text-center text-white mt-5";
footer.innerHTML="Copyright 2024";
main.after(footer);