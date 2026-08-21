
const i18n={
pt:{
eyebrow:"GUIA DE CAMPO HVACR",title:"Do vácuo ao superheat / subcooling.",
lede:"Itens 2–11 do syllabus oficial: evaporadores, compressores, instrumentação, evacuação, carga, recuperação, tubulação/solda, elétrica e preparação para o EPA 608. O item 1 (ciclo básico) fica na página principal do Fieldcraft.",
u1title:"Calor, Temperatura e Pressão",u1desc:"Guia de estudo por tópico, fórmulas, definições-chave e quiz com 25 questões.",
open:"Abrir Unit 1 →",sides:"Lado de baixa / alta",sidesdesc:"Use o guia como referência de campo enquanto estuda operação e medições do sistema.",prep:"Preparação EPA 608",prepdesc:"Organize conceitos, fórmulas e vocabulário de troubleshooting antes da prova.",overview:"Visão geral do curso",overviewdesc:"Interface bilíngue e responsiva construída em HTML, CSS e JavaScript para GitHub Pages.",search:"Buscar termo, conceito, valor…"
},
en:{eyebrow:"HVACR STUDY FIELD GUIDE",title:"Do vacuum to superheat / subcooling.",lede:"Items 2–11 of the official syllabus: evaporators, compressors, instrumentation, evacuation, charging, recovery, piping/brazing, electrical and EPA 608 exam prep. Item 1 (basic cycle) lives on the main Fieldcraft page.",u1title:"Heat, Temperature & Pressure",u1desc:"Study guide by topic, formulas, key definitions and a 25-question quiz.",open:"Open Unit 1 →",sides:"Low side / High side",sidesdesc:"Use the guide as a field reference while studying system operation and measurements.",prep:"EPA 608 preparation",prepdesc:"Organize concepts, formulas and troubleshooting vocabulary before testing.",overview:"Course overview",overviewdesc:"A bilingual, responsive study interface built in plain HTML, CSS and JavaScript for GitHub Pages.",search:"Search term, concept, value…"}
};
function setLang(lang){
 document.documentElement.lang=lang;
 document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(i18n[lang][k])el.textContent=i18n[lang][k]});
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{const k=el.dataset.i18nPlaceholder;if(i18n[lang][k])el.placeholder=i18n[lang][k]});
 localStorage.setItem("ahr110-lang",lang);
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
setLang(localStorage.getItem("ahr110-lang")||"en");

const cards=[
["02","Evaporators","Evaporadores"],["03","Compressors","Compressores"],["04","Instrumentation","Instrumentação"],
["05","Evacuation","Evacuação"],["06","Charging","Carga"],["07","Recovery","Recuperação"],
["08","Piping & Brazing","Tubulação & Solda"],["09","Electrical","Elétrica"],["10","Safety / Regulation","Segurança / Regulamentação"]
];
const results=document.getElementById("searchResults"), input=document.getElementById("search");
function renderResults(q=""){
 const lang=localStorage.getItem("ahr110-lang")||"en"; q=q.toLowerCase().trim();
 results.innerHTML=cards.filter(c=>!q||c.join(" ").toLowerCase().includes(q)).map(c=>`<article class="card"><div class="eyebrow">ITEM ${c[0]}</div><h3>${lang==="pt"?c[2]:c[1]}</h3><p>${lang==="pt"?"Tópico do syllabus AHR 110.":"AHR 110 syllabus topic."}</p></article>`).join("");
}
input?.addEventListener("input",e=>renderResults(e.target.value));
renderResults();
