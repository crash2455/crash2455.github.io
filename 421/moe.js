var t;
var m;

var moeExt = 1;

var restOfLifeRhythm = ['x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.', 'x', '.', 'o', '.'];//['x','.','.','o','.','.','x','.','.','.','.','.','.','o','.','x','.','.','o','.','x','.','.','.','.','x','o','.','.','.','o','.','.','x','.','.','.','.','.','o','.','.','x','.','.','o','x','.','.','.','.','.','x','o','.','.','o','.','.','x','.','.','.','.','.','.','o','.','x','.','.','.','.','x','.','.','.','.','x','o','.','.','.','o','.','.','x','.','.','.','.','.','.','o','.','x','.','.','o','x','.','.','.','.','.','x','o','.','.','o','.','.','.','x','.','.','.','.','.','o','.','.','x','.','.','o','x','.','.','.','.','.','x','o','.','.','o','.','.','x','.','.','.','.','.','.','o','.','x','.','.','o','.','x','.','.','.','.','x','o','.','.','.','o','.','.','x','.','.','.','.','.','.','o','.','x','.','.','o','x','.','.','.','.','.','x','o','.','.','o','.','.','.','x','.','.','.','.','x','o','.','x','.','.','.','o','x','.','x','x','.','x','.']
var ticker = [];
var backTicker = [];

function moe() {
  var hue = (Math.floor(Math.random() * 16777215)).toString(16);
  document.getElementById('bg').style.backgroundColor = '#' + hue;

  //console.log(moe);

  var moe = ((moeExt + (Math.ceil(Math.random() * 23))) % 24);
  moeExt = moe;
  moeStr = moe.toString();

  document.getElementById('bg').style.backgroundImage = "url('./assets/img/" + moeStr + ".png')";
  console.log(moeStr);
}

var sound = new Howl({
  src: ['./assets/weedloop2.ogg'],
  volume: 0.5
});

var musicIndex = 0;

function musicBox() {
  document.getElementById("ticker").innerHTML = backTicker.join('') +
    ' <span id="big">' + (restOfLifeRhythm[musicIndex] == '.' ? '   ' : restOfLifeRhythm[musicIndex]) + "</span> "
    + ticker.join('');
  if (restOfLifeRhythm[musicIndex] == 'x') {
    moe();
  }
  else if (restOfLifeRhythm[musicIndex] == 'o') {
    moe();
  }
  else if (restOfLifeRhythm[musicIndex] == '-') {
    moe();
  }
  musicIndex++;
  if (musicIndex == restOfLifeRhythm.length) {
    musicIndex = 0;
    sound.seek(0);
  }
  ticker.shift();
  backTicker.pop();
  ticker.push(restOfLifeRhythm[musicIndex % restOfLifeRhythm.length]);
  backTicker.unshift(restOfLifeRhythm[musicIndex % restOfLifeRhythm.length]);
}



document.getElementById("music").onclick = function () {
  document.getElementById("music").style = "display: none";
  //document.getElementById("moe").style = "display: inline";
  for (var i = 0; i < 20; i++) {
    ticker.push(restOfLifeRhythm[i]);
    backTicker.unshift(restOfLifeRhythm[i]);
  }
  m = setInterval(musicBox, 365.85365853) //official time is 121.915
  sound.play();
}
