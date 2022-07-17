let myHeading = document.querySelector('h3');

// 修改 h3 内容
myHeading.textContent = 'Hello World!';
// 点击切换图片函数
let myImg = document.querySelector('img');

myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/myimage.jpg') {
        myImg.setAttribute('src','images/firefox2.jpg');
    } else {
        myImg.setAttribute('src','images/myimage.jpg');
    }
}

// 添加个性化欢迎消息
let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name','myName');
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

myButton.onclick = function() {
    setUserName();
}