function heyJude(){
  return "Na na na na na na na, na na na na, hey Jude.".repeat(16)
}

// This function also works.
// function heyJude() {
//   return new Array(17).join("Na na na na na na na, na na na na, hey Jude.")
// }

function prohibitedLanguage(string) {
  return string.search(/candycorn|brusselssprouts/)
}
