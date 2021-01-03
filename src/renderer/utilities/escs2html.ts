export default function escs2html(text) {
  return text
    .replace(/\r?\n/g, '<br/>')
}