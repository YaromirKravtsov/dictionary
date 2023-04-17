const wordsObj = {
    "group1":
    [
        ['streiten','спорить'],
        ['bestimmt','определенный'],
        ['ärgerlich','злой'],
        ['wohl','наверное'],
        ['wahrscheinlich','вероятно'],
        ['verbringen','тратить'],
        ['verdienen','зарабатывать'],
        ['gleich','скоро'],
        ['glatt','ровный, скользкий'],
        ['der Unfall','Несчастный случай'],
        ['stehenlassen, verlassen','Оставлять'],
        ['ungefähr','Примерно( +- )'],
        ['Am kommenden…',' В наступающую…'],
        ['der König','король'],
        ['wählen','выбирать'],
        ['statt/finden','Состояться, происходить'],
        ['der Wettbewerb','соревнование'],  
        ['füttern','Кормить'], 
        ['schälen','Снимать кожуру'], 
        ['entscheiden','Решать'], 
        ['zurückrufen','Перезвонить'], 
        ['Kaugummi','Жевательная резинка'], 
        ['Geräusche','Звуки'], 
        ['bequem','Удобно'], 
        ['Unangenehm','Неудобно(ситуация)'], 
        ['aufwachen','Просыпаться'], 
        ['hoffen','надеяться'], 
        ['riechen','Чуять, нюхать'], 
        ['am Stück','Подряд'], 
        ['Wahr','Поакать'], 
        ['arschloch','Засранец'], 
        ['dummkopf','Дурак'], 
        ['ablenken','Отвлекать'], 
        ['beschäftigt','Занятый'], 
    ],
    "group2":
    [
        ['beschäftigt','Занятый'], 
    ],
};
const cardsEx = (obj) =>{
    document.querySelector('.content').innerHTML =
    `
    <div class="top__count"></div>
    <div class="left"></div>  
    <div class="right"></div>
    <div class="word" id = "word"></div>
    `;
const word = document.getElementById("word");
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const topCount = document.querySelector('.top__count');
let wordId =0,wordIndex = 0;;

function inner(id,index) {
    word.innerHTML = obj[id][index];
    topCount.innerHTML =(wordId+1);
}
inner(wordId,wordIndex);

word.addEventListener('click', ()=> {
    wordIndex = (wordIndex ==1)?0:1;
    inner(wordId,wordIndex);
});
left.addEventListener('click', function() {
    wordIndex = 0;
    wordId = (wordId ==0)?0:wordId-1;
    inner(wordId,wordIndex);
});
right.addEventListener('click', function() {
    wordIndex = 0;
    wordId++;
    inner(wordId,wordIndex);
});
}
document.getElementById('group1').addEventListener("click", ()=>cardsEx(wordsObj['group1']));
document.getElementById('group2').addEventListener("click", ()=>cardsEx(wordsObj['group2']));
