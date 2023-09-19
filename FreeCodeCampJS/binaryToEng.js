// Intermediate Algorithm Scripting
// Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.
function binaryAgent(str) {
  const binaryArr = str.split(" ")
  const asciiArr = []
  const engArr = []
  //binary to ascii
  binaryArr.map((ele) => {
    asciiArr.push(binToAscii(ele))
  })
  asciiArr.map((ele) => {
    // engArr.push(charCodeAt(ele))
    engArr.push(String.fromCharCode(ele))
  })
  return engArr.join("")
}

const binToAscii = (bin) => {
  let ascii = 0
  for (let i = 0; i < 8; i++) {
    if (bin[i] == 1) {
      switch (i) {
        case 0:
          ascii = ascii + 128
          break
        case 1:
          ascii = ascii + 64
          break
        case 2:
          ascii = ascii + 32
          break
        case 3:
          ascii = ascii + 16
          break
        case 4:
          ascii = ascii + 8
          break
        case 5:
          ascii = ascii + 4
          break
        case 6:
          ascii = ascii + 2
          break
        case 7:
          ascii = ascii + 1
          break
      }
    }
  }
  return ascii
}

const result = binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
)
console.log("Result: ", result)
