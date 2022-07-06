// birthday 2 .
function birthdayCakeCandles(candles) {
    var maxHeight = Math.max(...candles);
    var maxHeightCount = 0;  
    for(var i = 0; i < candles.length; i++){
        if (candles[i] == maxHeight){
            maxHeightCount = maxHeightCount + 1;
        }
    }
    console.log(maxHeightCount);
    return maxHeightCount;
}