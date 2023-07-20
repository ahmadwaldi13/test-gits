// 1. A000124 of Sloane’s OEIS

const generate = (n) => {
    const sequence = [];
    for (let i = 1; i <= n; i++) {
      const a_n = (i * (i + 1)) / 2
      sequence.push(a_n);
    }
    return sequence.join("-")
  }
  
  // Masukkan nilai n sesuai input yang diinginkan
  const n = 7 // Ubah nilai n sesuai keinginan Anda
  
  const result = generate(n)
  console.log("Output:", result)
  