function findAverage(numbers) {
   
    if (numbers.length === 0) return 0;

    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}


console.log(findAverage([10, 20, 30, 40, 50])); 

