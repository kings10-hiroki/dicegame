// 1~6乱数の生成
var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

// 1~6乱数に合わせた画像を設定
var sourceImage1 = 'images/dice' + randomNumber1 + '.png';
var sourceImage2 = 'images/dice' + randomNumber2 + '.png';

// .img1と.img2のsrc属性に画像を設定
document.querySelector('.img1').setAttribute('src', sourceImage1);
document.querySelector('.img2').setAttribute('src', sourceImage2);

var h1 = document.querySelector('h1');

// Draw
if (randomNumber1 === randomNumber2) {
    // h1のtextcontentを'Draw!に変更
    h1.textContent = 'Draw!';
    // Player 1 win
} else if (randomNumber1 > randomNumber2) {
    // h1のinnerHtmlを&#x1f6a9; Player 1 Win!に変更
    h1.innerHTML = '&#x1f6a9; Player 1 Win!';
    // Player 2 Win
} else {
    // h1のinnerHtmlをPlayer 2 Win! &#x1f6a9;に変更
    h1.innerHTML = 'Player 2 Win! &#x1f6a9;';
}
