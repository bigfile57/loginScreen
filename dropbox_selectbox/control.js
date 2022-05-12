
// queryselector 는 정적 콜렉션 (NodeList) 이기 때문에 DOM 변경사항이 
// 실시간 반영안된단다
// 그래서 clicked를 확인해주기 위해 HTMLCollection(라이브 콜렉션) 사용
//childNode 사용해도됨
const icon_control = document.querySelector('#icon-control');
// const list_control = document.querySelector('#wrap-list').childNodes;
const list_control = document.getElementById('wrap-list');
const labelBox = document.querySelector('.btn-select');
const label = document.querySelector('.label-text');

let listContent = list_control.childNodes;

let inputFocus = () =>{
    labelBox.classList.toggle('outline');
}
let controlList = () => {
    list_control.classList.toggle('clicked');
    console.log("controlList");
    inputFocus();
    console.log(label.childNodes[0].nodeValue);
} 

console.log(icon_control);
console.log(list_control);
console.log(listContent);
console.log(label.childNodes[0].nodeValue);

icon_control.addEventListener('click', (e)=>{
    console.log("icon clicked");
    console.log(e.target.classList);
    e.target.classList.toggle('open');
    controlList();
})
// listContent.forEach(e => {
//     e.addEventListener('mouseover',()=>{
//         label.textContent = e.textContent;
//         console.log(e);
//         e.addEventListener('click',controlList);
//     })
// });
listContent.forEach(e => {
    e.addEventListener('mouseover',()=>{
        label.textContent = e.textContent;
    })
});
listContent.forEach(e => {
    e.addEventListener('click',()=>{
        controlList();
    })
});
// click 다음 함수에 ()=>{ controlList()} 를 해주면 잘 작동하지않음 
// 아무래도 이유를 모르겠다. hover event가 계속 발동하면서 씹히는거 같긴하다
//
// wrap-list 를 querySelectorAll 로 하면 어떻게 될까 ?


// list_control.addEventListener('mouseover',(e)=>{
//     label.textContent = e.target.textContent;
//     // e.addEventListener('click',controlList());
// })

// list_control.forEach(e => {
//     e.addEventListener('click',()=>{
//         console.log(e);
//     })
// });





// let iconReset = (e) => {
//     e.target.classList.remove('open');
//     console.log(e.target.classList);
// }
