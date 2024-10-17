function updateTime() {
    let today = new Date();   

    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초

    // 시간이 한 자리일 경우 앞에 0을 추가해주는 코드
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // .nav-time 요소에 시간을 표시
    $('.nav-time').text(hours + ':' + minutes + ':' + seconds);
}

for (let i = 0; i < $('.tab-button').length; i++){

    $('.tab-button').eq(i).on('click', function(){
      $('.tab-button').removeClass('tab-show');
      $('.tab-button').eq(i).addClass('tab-show');
      $('.tab-page').removeClass('show');
      $('.tab-page').eq(i).addClass('show');
    })
};

// const coords = [115,254,113,246,111,237,108,232,104,227,103,221,101,
//   216,104,212,104,207,101,201,101,196,103,190,105,185,110,182,113,180,
//   117,180,122,182,126,186,129,189,129,193,133,197,137,197,141,197,147,
//   196,151,197,156,200,162,200,167,199,171,196,175,196,172,199,173,203,
//   178,205,182,208,186,208,184,210,180,213,175,216,169,219,167,223,164,
//   229,157,227,154,225,148,230,145,235,147,240,151,241,156,239,157,236,
//   162,235,162,237,160,241,162,244,163,247,160,250,157,256,152,256,145,
//   254,141,249,135,247,130,248,126,249,125,253,125,257,119,254];

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// canvas.width = canvas.offsetWidth;
// canvas.height = canvas.offsetHeight;

//   // 다각형 경계선 그리기
// ctx.beginPath();
// ctx.moveTo(coords[0], coords[1]);

// for (let i = 2; i < coords.length; i += 2) {
//     ctx.lineTo(coords[i], coords[i + 1]);
// }
// ctx.closePath();

// // 내부 색상 설정 (붉은색, 반투명)
// ctx.fillStyle = 'rgba(255, 0, 0, 0.1)'; // 투명도 0.3
// ctx.fill();  // 내부를 채우기

// // 경계선 스타일 설정
// ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)'; // 경계선 투명도 0.7
// ctx.lineWidth = 4;
// ctx.stroke(); // 경계선 그리기

// // // 캔버스를 지우기 (마우스가 영역을 벗어날 때)
// // function clearCanvas() {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);
// // }

// // 클릭 이벤트 리스너 추가
// canvas.addEventListener('click', function(event) {
//   // 캔버스의 위치 계산
//   const rect = canvas.getBoundingClientRect();

//   // 클릭한 좌표를 캔버스 좌표로 변환
//   const x = event.clientX - rect.left;
//   const y = event.clientY - rect.top;

//   // 클릭한 좌표를 콘솔에 출력
//   console.log('클릭한 좌표:', x, y);
// });


// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// const img = new Image();
// img.src = '../img/pngegg.png'; // 이미지 경로를 넣으세요

// img.onload = function() {
//   // 이미지를 캔버스에 그리기
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//   // 이미지 데이터 가져오기
//   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//   const data = imageData.data; // RGBA 데이터 배열

//   const whiteCoords = [];

//   // 픽셀 데이터 순회 (4씩 증가하는 이유는 R, G, B, A 순으로 저장되기 때문)
//   for (let i = 0; i < data.length; i += 4) {
//     const r = data[i];     // Red
//     const g = data[i + 1]; // Green
//     const b = data[i + 2]; // Blue
//     const a = data[i + 3]; // Alpha (투명도)

//     // 흰색 판별 (R, G, B 값이 모두 255이고, Alpha가 255인 경우)
//     if (r === 255 && g === 255 && b === 255 && a === 255) {
//       // i는 1차원 배열이므로, 좌표로 변환
//       const index = i / 4;
//       const x = index % canvas.width;
//       const y = Math.floor(index / canvas.width);

//       // 흰색 픽셀의 좌표 저장
//       whiteCoords.push([x, y]);
//     }
//   }

//   console.log('흰색 좌표:', whiteCoords);
// };

// 최초 시간 업로드
updateTime();
setInterval(updateTime, 100);