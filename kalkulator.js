let hasil=[]; // initialize empty array to store input
let hasilakhir; // initialize variable to store final result

/**
 * Updates the hasil array and displays it in the text field
 * @param {number} num - The number to add to hasil
 */
function updateHasil(num) {
    hasil += num;
    document.getElementById('hasil').value = hasil;
}

/**
 * Updates the hasil array with a mathematical operator and displays it in the text field
 * @param {string} operator - The mathematical operator to add to hasil
 */
function updateOperator(operator) {
    hasil += operator;
    document.getElementById('hasil').value = hasil;
}

// Add click event listeners to each button

document.getElementById('1').onclick = function() {
    updateHasil(1);
}
document.getElementById('2').onclick = function() {
    updateHasil(2);
}
document.getElementById('3').onclick = function() {
    updateHasil(3);
}
document.getElementById('4').onclick = function() {
    updateHasil(4);
}
document.getElementById('5').onclick = function() {
    updateHasil(5);
}
document.getElementById('6').onclick = function() {
    updateHasil(6);
}
document.getElementById('7').onclick = function() {
    updateHasil(7);
}
document.getElementById('8').onclick = function() {
    updateHasil(8);
}
document.getElementById('9').onclick = function() {
    updateHasil(9);
}
document.getElementById('0').onclick = function() {
    updateHasil(0);
}
document.getElementById('+').onclick = function() {
    updateOperator('+');
}
document.getElementById('-').onclick = function() {
    updateOperator('-');
}
document.getElementById('*').onclick = function() {
    updateOperator('*');
}
document.getElementById('/').onclick = function() {
    updateOperator('/');
}

/**
 * Deletes the last character in hasil and updates the text field
 */
document.getElementById('clear').onclick = function() {
    hasil = hasil.slice(0,-1);
    document.getElementById('hasil').value = hasil;
}

/**
 * Evaluates the expression stored in hasil and updates the text field with the result
 */
document.getElementById("submit").onclick = function() {
    hasilakhir = eval(hasil);
    console.log(hasilakhir);
    document.getElementById("hasil").value = hasilakhir;
    hasil = []
};
