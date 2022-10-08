let gScore=0, hScore=0;
let guestScoreEl = document.getElementById("guest-score");
let homeScoreEl = document.getElementById("home-score");
let leaderboardEl = document.getElementById("leaderboard");
guestScoreEl.textContent=gScore;
homeScoreEl.textContent=hScore;

function add(str,n){
    if(str=="home")
    {
        hScore+=n;
        homeScoreEl.textContent=hScore;
    }
    else{
        gScore+=n;
        guestScoreEl.textContent=gScore;   
    }
    
    if(hScore>gScore)
    {
        leaderboardEl.textContent = "HOME leads!"
    }
    else if(hScore < gScore)
    {
        leaderboardEl.textContent = "GUEST leads!"
    }
    else
    {
        leaderboardEl.textContent = "It's a DRAW!"
    }
}

function newGame(){
    hScore=0, gScore=0;
    guestScoreEl.textContent=gScore;
    homeScoreEl.textContent=hScore;
    leaderboardEl.textContent = "";
}