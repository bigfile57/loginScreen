
const label = document.getElementById('icon-control');
const listControl = document.getElementById('wrap-list');
// queryselector 는 정적 콜렉션 (NodeList) 이기 때문에 DOM 변경사항이 
// 실시간 반영안된단다
// 그래서 clicked를 확인해주기 위해 HTMLCollection(라이브 콜렉션) 사용
//childNode 사용해도됨
const selectBox = document.querySelector('.btn-select');
const selectBoxText = document.querySelector('.label-text');
const listItem = document.querySelectorAll('.list-item');

function inputClickItem(item){
    selectBoxText.innerText = item.textContent;
    handleSelectBox();
    imageControl();
}
function handleSelectBox(){
    listControl.classList.toggle("clicked");
}
function selectBoxOnline(){
    if(listControl.classList.contains("clicked") != true){
            selectBox.style.border = "1px solid #9B51E0";
            selectBox.style.outline = "3px solid #F8E4FF";
        }
}
function imageControl(){
    if(listControl.classList.contains("clicked") != true)
        label.src="./icon-Triangle-down.png"
    else
        label.src="./icon-Triangle-up.png";
}

label.addEventListener('click', function() {
    handleSelectBox();
    selectBoxOnline();
    imageControl();
});

listItem.forEach(function(item){
    item.addEventListener('click', function(e){
        console.log(e.target.textContent);
        inputClickItem(item)
    });
})
