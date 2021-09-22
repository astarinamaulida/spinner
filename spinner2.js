const spinner = function(circle, timeout) {
  const lines = ['\r|   ', '\r/   ', '\r-   ', '\r|   '];
  for (let i = 0; i < circle; i++)
    for (const line of lines) {
      setTimeout(() => {
        process.stdout.write(line);
      }, timeout);
      timeout += 200;
    }
};

// to make it 4 cycles
spinner(4, 0);