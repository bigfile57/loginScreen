const list_control = document.getElementById('wrap-list');
const listContent = list_control.childNodes;
// list_control 의 li 부분만 빼내려고 따로 변수에 저장
// const list_control = document.querySelectorAll('ul li');
const labelBox = document.querySelector('.btn-select');
const label = document.querySelector('.label-text');
const icon_control = document.querySelector('#icon-control');


// selectBox 테두리 색 컨트롤
let inputFocus = () =>{
    labelBox.classList.toggle('outline');
}
// selectBox list 부분 열렸다 닫혔다
let controlList = () => {
    list_control.classList.toggle('clicked');
    inputFocus();
} 

// selectBox list 부분 열렸다 닫혔다 icon 위아래 컨트롤
// close 아래아이콘 , open 위 아이콘
let controlIcon = () => {
    icon_control.classList.toggle('open');
    // controlList();
}

// 아이콘 클릭이벤트, 아이콘을 바꿔주고 selectBox 내용 열어주기
icon_control.addEventListener('click', ()=>{
    console.log("icon clicked");
    controlIcon();
    controlList();
})
// select list 내용 마우스로 올리면 label 에 해당 text 뜨도록하는 함수
listContent.forEach(e => {
    e.addEventListener('mouseover',()=>{
        label.textContent = e.textContent;
    })
});
// select list 내용 클릭하면 영역 닫히고 클릭한 내용 뜨도록 하는 함수
listContent.forEach(e => {
    e.addEventListener('click',()=>{
        console.log("list-clicked");
        controlList();
        controlIcon();
    })
});