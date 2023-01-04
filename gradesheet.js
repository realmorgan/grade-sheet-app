function getgrade(score,gradeid) {

    var english = Number(document.getElementById('eng').value);

    if (score > 0 && score <= 45) {
        document.getElementById('gradeid').value = 'F';

    }else if (score > 0 && score <= 45) {
        document.getElementById('gradeid').value = 'E';

    }else if (score > 45 && score < 50) {
        document.getElementById('gradeid').value = 'D';

    }else if (score >= 50 && score <= 60) {
        document.getElementById('gradeid').value = 'C';

    }else if (score > 60 && score <= 69) {
        document.getElementById('gradeid').value = 'B';

    }else if (score > 69 && score <= 100) {
        document.getElementById('gradeid').value = 'A';

    }else{
        document.getElementById('gradeid').value = 'Invalid';
    }
}

getgrade(score,gradeid);


function calgrade() {
    var eng = Number(document.getElementById('engscore').value);
    var mth = Number(document.getElementById('mthscore').value);
    var chem = Number(document.getElementById('chemscore').value);
    var bio = Number(document.getElementById('bioscore').value);
    var frch = Number(document.getElementById('frchscore').value);
    if(eng==''){}
    else if(isNaN(eng) || isNaN(mth) || isNaN(chem) || isNaN(bio) || isNaN(frch)){
        alert('One or more of the score is invalid, please correct')
        document.getElementById('totalscore').innerHTML = 'Error'
    }else{
        var total = eng + mat + chem + bio + frch;
        document.getElementById('totalscore').innerHTML = total;
    }
}

calgrade();