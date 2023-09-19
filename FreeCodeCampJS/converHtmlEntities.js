// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

/*
& => &amp;
< => &lt;
> => &gt;
" => &quot;
' => &apos;
*/
function convertHTML(str) {
  const htmlEntitiesArr = ["&", "<", ">", '"', "'"]
  for (let i = 0; i < str.length; i++) {
    if (htmlEntitiesArr.indexOf(str[i]) != -1) {
      let tempStr1 = str.slice(0, i)
      let tempStr2 = str.slice(i + 1, str.length)
      str = tempStr1 + replaceHtml(str[i]) + tempStr2
    }
  }

  console.log(str)
  return str
}

const replaceHtml = (str) => {
  switch (str) {
    case "&":
      str = "&amp;"
      break
    case "<":
      str = "&lt;"
      break
    case ">":
      str = "&gt;"
      break
    case "'":
      str = "&apos;"
      break
    case '"':
      str = "&quot;"
      break
  }
  return str
}
let result = convertHTML("Dolce & Gabbana")
console.log("Result: ", result)
