var intervalID = 0,
    krpano = document.getElementById("krpanoSWFObject"),
    menuBtn = document.getElementById('menu'),
    back = document.getElementById("back"),
    rightMenu = document.getElementById('right-menu'),
    myModal = document.getElementById('myModal'),
    logo  = document.getElementById('logo'),
    bgMusic = document.getElementById('bg-music'),
    bgmSwitch = document.getElementById('bgm-switch'),
    gyroSwitch = document.getElementById('gyro-switch'),
    autorotateSwitch = document.getElementById('autorotate-switch'),
    vrSwitch = document.getElementById('vr-switch'),
	//左边按钮变量声明
	// leftMenu = document.getElementById('btn'),
	// sbtn = document.getElementsByClassName("s"),
	// sbtn1 = document.getElementsByClassName("s1")[0],
	// sbtn2 = document.getElementsByClassName("s2")[0],
	// sbtn3 = document.getElementsByClassName("s3")[0],
	// sbtn4 = document.getElementsByClassName("s4")[0],
	// flag1 = true,
	flag2 = true;
    //电话和计算器的变量声明
    // btn_r_s = document.getElementById('btn_r_s');

// 右部菜单收起、放下动画的事件处理程序
function handleSlide(e) {
  e.preventDefault();
  if (intervalID !== 0) {
    return;
  }
  var height = Math.ceil(parseInt(rightMenuContainer.clientHeight)) + 50;

  if (e.target.firstChild.data === '-') {
    intervalID = setInterval(function () {

      rightMenuContainer.style.top = rightMenuContainer.style.top ?
      parseInt(rightMenuContainer.style.top) - 16 + 'px' : '0px';

      if (parseInt(rightMenuContainer.style.top) * -1 > height) {
        clearInterval(intervalID);
        intervalID = 0;
      }
    }, 10);

    e.target.innerHTML = '+';
  } else if (e.target.firstChild.data === '+') {
    intervalID = setInterval(function () {
      rightMenuContainer.style.top = parseInt(rightMenuContainer.style.top) === 0 ?
          0 : parseInt(rightMenuContainer.style.top) + 16 + 'px';

      if (parseInt(rightMenuContainer.style.top) === 0) {
        clearInterval(intervalID);
        intervalID = 0;
      }
    }, 10);
    e.target.innerHTML = '-';
  }
};

// 为背景音乐开关按钮添加事件处理程序
bgmSwitch.addEventListener('click', function (e) {
  e.preventDefault();
    if (!bgMusic.paused) {
      bgMusic.pause();
      bgmSwitch.style.backgroundPosition = '0 -29px';
    } else {
       bgMusic.play();
       bgmSwitch.style.backgroundPosition = '0 0';
    }
}, false);


// 为陀螺仪开关按钮添加事件处理程序
gyroSwitch.addEventListener('click', function (e) {
  e.preventDefault();

  if (krpano.get('Plugin[skin_gyro].enabled')) {
    krpano.set('Plugin[skin_gyro].enabled', false);
    gyroSwitch.style.backgroundPosition = '0 -29px';
  } else {
    krpano.set('Plugin[skin_gyro].enabled', true);
    gyroSwitch.style.backgroundPosition = '0 0';
  }
}, false);


// 为自动旋转开关按钮添加事件处理程序
autorotateSwitch.addEventListener('click', function (e) {
  e.preventDefault();

  if (krpano.get('autorotate.enabled')) {
    krpano.set('autorotate.enabled', false);
    autorotateSwitch.style.backgroundPosition = '0 -29px';
  } else {
    krpano.set('autorotate.enabled', true);
	autorotateSwitch.style.backgroundPosition = '0 0';
  }
}, false);


// 为 VR 开关按钮添加事件处理程序
vrSwitch.addEventListener('click', function (e) {
  e.preventDefault();
  krpano.call('webvr.enterVR()');

}, false);


// 菜单的淡入淡出
	//左菜单淡入
// function fadeInLeftPanel() {
//     leftMenu.classList.remove('fade-out-left');
//     btn_r_s.classList.remove('fade-out-left-other');
//     btn_r_s.classList.add('fade-in-left-other');
// };
//     //左菜单淡出
// function fadeOutLeftPanel(){
//     leftMenu.classList.remove('fade-in-left');
//     btn_r_s.classList.remove('fade-out-left-other');
//     btn_r_s.classList.add('fade-out-left-other');
// };
	//右菜单淡入
function fadeInRightPanel() {
    menuBtn.classList.remove('fade-out-right');
    back.classList.remove('fade-out-right');
    menuBtn.classList.add('fade-in-right');
    back.classList.add('fade-in-right');
};
	//右菜单淡出
function fadeOutRightPanel(){
    rightMenu.classList.remove('fade-in-right');
    menuBtn.classList.remove('fade-in-right');
    back.classList.remove("fade-in-right");
    rightMenu.classList.add('fade-out-right');
    menuBtn.classList.add('fade-out-right');
    back.classList.add("fade-out-right");
};


// //左边菜单点击动画
// leftMenu.addEventListener('click', function (e)     {
//   if(flag1){
//         for(var i = 0;i < sbtn.length; i++){
//         sbtn[i].style.opacity = 1;
//         leftMenu.parentElement.classList.add("other");
//         btn_r_s.classList.remove('fade-in-left-other');
//         btn_r_s.classList.add('fade-out-left-other');
//     }
//         leftMenu.style.position = "fixed";
//         sbtn1.style.bottom = "130px";
//         sbtn1.style.left = "3px";
//         sbtn2.style.bottom = "110px";
//         sbtn2.style.left = "55px";
//         sbtn3.style.bottom = "67px";
//         sbtn3.style.left = "98px";
//         sbtn4.style.bottom = "5px";
//         sbtn4.style.left = "115px";
//         flag1 = false;
//     }else{
//         for(var i = 0;i < sbtn.length;i++){
//             sbtn[i].style.left = "-40px";
//             sbtn[i].style.bottom = "-40px";
//             sbtn[i].style.opacity = 0;
// 			leftMenu.parentElement.classList.remove("other");
//             btn_r_s.classList.remove('fade-out-left-other');
//             btn_r_s.classList.add('fade-in-left-other');
//         }
//         flag1 = true;
//     }
// });

//右边菜单的动画
menuBtn.addEventListener('click',function (e) {
    if(flag2){
        rightMenu.classList.remove('fade-out-right');
        rightMenu.classList.add('fade-in-right');
        flag2 = false;
    }else {
        rightMenu.classList.remove('fade-in-right');
        rightMenu.classList.add('fade-out-right');
        flag2 = true;
    }
},false);

//模态框禁用滑动事件
myModal.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });

