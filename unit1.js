
const T={
en:{
next:"Next question →",finish:"Finish quiz",restart:"Restart quiz",score:"Score",correct:"Correct!",wrong:"Not quite.",explain:"Correct answer",question:"Question",of:"of",done:"Quiz complete",review:"Review the questions and try again to improve your score."
},
pt:{
next:"Próxima questão →",finish:"Finalizar quiz",restart:"Refazer quiz",score:"Pontuação",correct:"Correto!",wrong:"Não foi dessa vez.",explain:"Resposta correta",question:"Questão",of:"de",done:"Quiz concluído",review:"Revise as questões e tente novamente para melhorar sua pontuação."
}};
let questions=[],index=0,score=0,answered=false;
async function loadQuiz(){
 const res=await fetch("questions.json");
 questions=await res.json();
 renderQuestion();
}
function lang(){return localStorage.getItem("ahr110-lang")||"en"}
function renderQuestion(){
 const q=questions[index], t=T[lang()];
 const pct=(index/questions.length)*100;
 document.getElementById("quizArea").innerHTML=`
 <div class="quiz-meta"><span>${t.question} ${index+1} ${t.of} ${questions.length}</span><strong>${t.score}: ${score}/${questions.length}</strong></div>
 <div class="progress"><div style="width:${pct}%"></div></div>
 <h3 style="font-size:1.35rem;margin-top:18px">${q.question}</h3>
 <div id="options">${q.options.map(o=>`<button class="option" data-answer="${o[0]}">${o}</button>`).join("")}</div>
 <div id="feedback" class="feedback"></div>
 <div class="quiz-actions"><button id="next" class="btn" disabled>${index===questions.length-1?t.finish:t.next}</button></div>`;
 document.querySelectorAll(".option").forEach(b=>b.addEventListener("click",()=>choose(b,q)));
 document.getElementById("next").addEventListener("click",nextQuestion);
}
function choose(btn,q){
 if(answered)return; answered=true;
 const t=T[lang()], correct=btn.dataset.answer===q.answer;
 if(correct)score++;
 document.querySelectorAll(".option").forEach(b=>{
   b.disabled=true;
   if(b.dataset.answer===q.answer)b.classList.add("correct");
 });
 if(!correct)btn.classList.add("wrong");
 document.getElementById("feedback").innerHTML=`<b>${correct?t.correct:t.wrong}</b> · ${t.explain}: <strong>${q.answer}</strong>`;
 document.getElementById("next").disabled=false;
 document.querySelector(".progress > div").style.width=`${((index+1)/questions.length)*100}%`;
}
function nextQuestion(){
 if(index<questions.length-1){index++;answered=false;renderQuestion();return}
 showResult();
}
function showResult(){
 const t=T[lang()],pct=Math.round(score/questions.length*100);
 document.getElementById("quizArea").innerHTML=`
 <div class="progress"><div style="width:100%"></div></div>
 <div class="score">${score}/${questions.length} · ${pct}%</div>
 <h3>${t.done}</h3><p class="lede">${t.review}</p>
 <button class="btn" id="restart">${t.restart}</button>`;
 document.getElementById("restart").addEventListener("click",()=>{index=0;score=0;answered=false;renderQuestion()});
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{setTimeout(()=>{if(questions.length)renderQuestion()},0)}));
async function setInitial(){document.documentElement.lang=localStorage.getItem("ahr110-lang")||"en";document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===document.documentElement.lang));await loadQuiz()}
setInitial();
