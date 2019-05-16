const getMedian = number => {
    
    let getPrimeNumbers = () => {
        // Generates array of [0,1,...number]
        var numberList = [...Array(number+1).keys()];
        numberList[1] = 0; 
        var ceiling = Math.sqrt(number);
            for (var i=2; i<=ceiling; i++){
                for (var j=i*i; j<=number; j+=i){
                    numberList[j]=0;
                }
            }
        return numberList.filter(Number); 
    }

    let calculateMedian = primeList => {
        return primeList.filter((n,index) => {
            if (primeList.length % 2 == 0){
                return index == primeList.length/2 || index == primeList.length/2-1;
            }else{
                return index == Math.floor(primeList.length/2);
            }
        });
    }
  
    // Base Case
    if(number < 2 || number == null ){
        return false;
    }
    else{
        return calculateMedian(getPrimeNumbers());
    }
};

module.exports = {
    getMedian : getMedian
};