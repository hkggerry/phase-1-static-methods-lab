class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^\w\s\-\']/gi, '')
  }

static titleize(string) {
  const excludeWords = ['of', 'a', 'an', 'but', 'the', 'for', 'at', 'by', 'from', 'and']
  return string.replace(/\w\S*/g, function (txt) {
    if (txt === string[0]) return txt.toUpperCase()
    if (excludeWords.indexOf(txt) === -1) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
    return txt
  }
  )
}
}