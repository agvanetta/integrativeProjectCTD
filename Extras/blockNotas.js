// birthday 2 .
function birthdayCakeCandles(candles) {
    var maxHeight = Math.max(...candles);  /// let array2 = candles.sort(); let condition = array2[array2.length - 1];
    var maxHeightCount = 0;  
    for(var i = 0; i < candles.length; i++){
        if (candles[i] == maxHeight){
            maxHeightCount = maxHeightCount + 1;
        }
    }
    console.log(maxHeightCount);
    return maxHeightCount;
}