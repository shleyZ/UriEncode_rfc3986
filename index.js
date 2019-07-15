// params
// input: string
// encodeSlash: 是否编码斜杠
function UriEncode(input, encodeSlash) {
  input = encodeURI(input);
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let ch = input.charAt(i);
    if (
      (ch >= "A" && ch <= "Z") ||
      (ch >= "a" && ch <= "z") ||
      (ch >= "0" && ch <= "9") ||
      ch == "_" ||
      ch == "-" ||
      ch == "~" ||
      ch == "." ||
      ch == "%"
    ) {
      result += ch;
    } else if (ch == "/") {
      result += encodeSlash ? "%2F" : ch;
    } else {
      result +=
        "%" +
        ch
          .charCodeAt(0)
          .toString(16)
          .toUpperCase();
    }
  }
  return result.toString();
}

export default UriEncode;
