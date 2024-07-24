const scoreId = document.getElementById('scoreId');
const infoId = document.getElementById('infoId');
const runsId = document.getElementById('runsId');
const ballId = document.getElementById('ballId');
const batId = document.getElementById('batId');
const foursId = document.getElementById('foursId');
const sixesId = document.getElementById('sixesId');
const groundId  = document.getElementById('groundId');
const audienceId = document.getElementById("audienceId");
const ballhitId = document.getElementById('ballhitId');
const boundaryId = document.getElementById('boundaryId');
const runningId = document.getElementById('runningId');
const wicketId = document.getElementById('wicketId');

batId.setAttribute('disabled', '');

let score = 0;
const optionsList = ['one', 'two', 'six', 'four', 'noball', 'wicket', 'dotball'];
let engage = false;
let audioEngage = false;

const repeatBowling = () => {
    ballId.setAttribute('class', 'ball');
    ballId.style.display = 'block';
    batId.setAttribute('disabled', '');
    batId.classList.remove('active');
    setTimeout(() => {
        batId.removeAttribute('disabled');
        batId.classList.add('active')
    }, 2200)
    engage = false;
}

const startTheMatch = () => {
    let randomNum = Math.floor(Math.random() * optionsList.length);
    const spanChild = runsId.children[0];
    const divChild = runsId.children[1];
    switch (randomNum) {
        case 0:
            setTimeout(() => {
                runsId.setAttribute('class', 'cricket_pitch2');
                spanChild.style.display = 'block';
                divChild.style.display = 'block';
                runningId.play();
            },1500);
            ballId.classList.add('class', 'ball1');
            ballId.style.display = 'block';
            setTimeout(() => {
                runsId.removeAttribute('class')
                spanChild.style.display = 'none';
                divChild.style.display = 'none';
                score++;
                scoreId.textContent = score;
                runningId.pause();
                runningId.currentTime = 0;
                repeatBowling();
            }, 5000);
            break;
        case 1:
            setTimeout(() => {
                runsId.setAttribute('class', 'cricket_pitch2');
                spanChild.style.display = 'block';
                divChild.style.display = 'block';
                runningId.play();
            },2000)
            ballId.classList.add('class', 'ball1');
            ballId.style.display = 'block';
            setTimeout(() => {
                runsId.removeAttribute('class')
                spanChild.style.display = 'none';
                divChild.style.display = 'none';
                score += 2;
                scoreId.textContent = score;
                runningId.pause();
                runningId.currentTime = 0;
                repeatBowling();
            }, 8000);
            break;
        case 2:
            ballId.classList.add('class', 'ball2');
            ballId.style.display = 'block';
            setTimeout(() => {
                sixesId.setAttribute('class', 'sixes');
                boundaryId.play();
            },1500)
            setTimeout(() => {
                sixesId.removeAttribute('class');
                repeatBowling();
                score += 6;
                scoreId.textContent = score;
                boundaryId.pause();
                boundaryId.currentTime = 0;
            }, 6000);
            break;
        case 3:
            score += 4;
            ballId.classList.add('class', 'ball3');
            ballId.style.display = 'block';
            setTimeout(() => {
                foursId.setAttribute('class', 'fours');
                boundaryId.play();
            },1500)
            setTimeout(() => {
                foursId.removeAttribute('class');
                repeatBowling();
                score += 4;
                scoreId.textContent = score;
                boundaryId.pause();
                boundaryId.currentTime = 0;
            }, 6000);
            break;
        case 4:
            score += 1;
            infoId.textContent = "No Ball";
            infoId.setAttribute('class', 'information');
            ballId.style.display = 'none';
            setTimeout(() => {
                repeatBowling()
            }, 1000);
            break;
        case 5:
            infoId.textContent = "Wicket";
            infoId.setAttribute('class', 'information');
            ballId.style.display = 'none';
            wicketId.play();
            setTimeout(() => {
                wicketId.pause();
                wicketId.currentTime = 0;
                repeatBowling();
            }, 3000);
            break;
        case 6:
            infoId.textContent = "Dot Ball";
            infoId.setAttribute('class', 'information');
            ballId.style.display = 'none';
            setTimeout(() => {
                repeatBowling()
            }, 1000);
            break;
        default:
            infoId.textContent = "";
            return score;
    }
    scoreId.textContent = score;
    setTimeout(() => {
        infoId.removeAttribute('class');
    }, 2000);
}

function playBtn(batsman) {
    ballhitId.play();
    let player = document.getElementById(batsman);
    let newPlayer = player.getAttribute('src') === './images/batsman1.png' ? './images/batsman2.png' : './images/batsman1.png';
    player.setAttribute('src', newPlayer);
    setTimeout(() => {
        player.setAttribute('src', './images/batsman1.png');
    }, 2000)
    ballId.style.display = 'none';
    ballId.removeAttribute('ball');
    batId.setAttribute('disabled', '');
    startTheMatch();
    engage = true;
}

setTimeout(() => {
    groundId.style.display = 'none';
    repeatBowling();
},4000);




setInterval(()=>{
    if(engage===false) {
        ballId.style.display = 'none';
        ballId.removeAttribute('ball');
        batId.setAttribute('disabled', '');
        setTimeout(() => {
            repeatBowling();
        },1000);
    }
    audienceId.play();
},9000);
