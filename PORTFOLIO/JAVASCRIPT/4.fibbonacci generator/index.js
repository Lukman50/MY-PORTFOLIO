function generateSequence() {
    var numberInput = document.getElementById('numberInput').value;
    var sequenceList = document.getElementById('sequenceList');

    // Clear previous results
    sequenceList.innerHTML = '';

    // Generate Fibonacci sequence
    var sequence = fibonacciGenerator(parseInt(numberInput));

    // Display sequence
    sequence.forEach(function(number) {
        var listItem = document.createElement('li');
        listItem.textContent = number;
        sequenceList.appendChild(listItem);
    });
}

function fibonacciGenerator(n) {
    var output = [];

    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

    return output;
}
