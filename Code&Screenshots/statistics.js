


function getNumbers() {
    const input = document.getElementById("numInput").value.trim();
    const error = document.getElementById("error");
    const output = document.getElementById("output");

    error.textContent = "";
    output.textContent = "";

    if (input === "") {
        error.textContent = "Error: Please enter a list of numbers.";
        return null;
    }

    const parts = input.split(/\s+/);
    
    const numbers = parts.map(num => Number(num));

    if (numbers.some(isNaN)) {
        error.textContent = "Error: Input contains invalid numeric values.";
        return null;
    }

    return numbers;
}


function computeMean() {
    
    const nums = getNumbers();
    if (!nums) return;

    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
   
    document.getElementById("output").textContent = 
        "Mean: " + mean.toFixed(4);

        
}


function computeVariance() {
    const nums = getNumbers();
    if (!nums) return;

    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    const variance = nums.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / nums.length;
    
    document.getElementById("output").textContent = 
        "Variance: " + variance.toFixed(4);
}

function computeStdDev() {
    const nums = getNumbers();
    if (!nums) return;

    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    const variance = nums.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / nums.length;
    const stdDev = Math.sqrt(variance);

    document.getElementById("output").textContent = 
        "Standard Deviation: " + stdDev.toFixed(4);
}
