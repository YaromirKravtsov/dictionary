const obj =[
    ['streiten','спорить'],
    ['bestimmt','определенный'],
    ['ärgerlich','злой'],
    ['wohl uns','наверное'],
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
];
const word = document.getElementById("word");
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let wordId =0,wordIndex = 0;;

function inner(id,index) {
    word.innerHTML = obj[id][index];
 /*    console.log(id+" "+index) */
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
