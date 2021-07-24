const caesorCipher = (string, shiftValue)=> {
  if (shiftValue === 0) return string

  return string.replace(/[a-z]/g, (char) =>
    String.fromCharCode(((char.charCodeAt(0) - 97 + shiftValue) % 26) + 97)
  )
}

module.exports = caesorCipher