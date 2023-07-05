function fibonacciSeries(n) {
    var series = [0, 1]; // Initialize the series with first two numbers
  
    if (n <= 2) {
      return series.slice(0, n); // Return the series of length n
    }
  
    for (var i = 2; i < n; i++) {
      var nextNumber = series[i - 1] + series[i - 2];
      series.push(nextNumber); // Add the next number to the series
    }
  
    return series;
  }
  console.log(fibonacciSeries(10));
 