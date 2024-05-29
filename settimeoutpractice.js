for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}

// OUTPUT = 0 1 2 3 4
let j = 0;
for (j = 0; j < 5; j++) {
    setTimeout(() => console.log(j), 0);
}

// OUTPUT = 5 5 5 5 5

for (var k = 0; k < 5; k++) {
    setTimeout(() => console.log(k), 0);
}

// OUTPUT = 5 5 5 5 5
