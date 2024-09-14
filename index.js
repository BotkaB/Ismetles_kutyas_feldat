
import { kutyaLista } from "./adatok.js";
import Kartyak from "./Kartyak.js";
const kivalasztottLista=[];

const divElem = $(".tartalom");
const kivElem = $(".kivalasztottak");


new Kartyak(kutyaLista, divElem);

//melyik kártyára kattintottunk? az adatait tegyük bele a kivalasztott listaba
//privát adattaag elérédéhez kell egy getter az osztályban és azt kell meghívni.
//probléma akkor kéne meghívni, ha rákattintunk a gombra. akattintás a kártya osztályban van.
///feliratkozunk a saját eseményünkre

$(window).on("kivalaszt",(event)=>{
  console.log(event.detail) //ezt adta, át infót a saaját eseménynél, az adott kártyához tartozó kutya adata.
  kivalasztottLista.push(event.detail)
  console.log(kivalasztottLista)
  new Kartyak(kivalasztottLista, kivElem);
})