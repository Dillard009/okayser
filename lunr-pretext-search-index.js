var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-",
  "level": "1",
  "url": "sec-.html",
  "type": "Section",
  "number": "1.1",
  "title": "Nome da Seção",
  "body": " Nome da Seção \\   O teorema tal.    "
},
{
  "id": "thm-",
  "level": "2",
  "url": "sec-.html#thm-",
  "type": "Theorem",
  "number": "1.1.1",
  "title": "",
  "body": "  O teorema tal.   "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.2",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
