function generateFibonacci(max) {
    const sequence = [0, 1];
    
    while (true) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        
        if (next > max) break;
        
        sequence.push(next);
    }
    
    return sequence;
}

console.log(generateFibonacci(15)); 
