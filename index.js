let heyJude = ()=> "Na na na na na na na, na na na na, hey Jude.".repeat(16)

let prohibitedLanguage = (name)=> {
  let myRegExp = /candycorn|brusselssprouts/;
  return name.search(myRegExp);
}
