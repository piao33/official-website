export function safeHtml(text) {
    let reg = new RegExp('<script.*?</script>', 'gi');
    // let reg = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    // let reg = /<.*?script.*\/?>/gi;
    // let reg1 = new RegExp('<script[^>]*>([\S\s]*?)<\/script>', 'gim');
    // let reg2 = new RegExp('<script.*?>.*?<\/script>', 'gim');
    // let reg3 = new RegExp('<(script.*?)>(.*?)<(\/script.*?)>', 'gim');
    // let text1 = text.replace(reg, ' ');
    // console.log(text1)
    // let text2 = text.replace(reg1, ' ');
    // console.log(text2)
    // let text3 = text.replace(reg2, ' ');
    // console.log(text3)
    // let text4 = text.replace(reg3, ' ');
    // console.log(text4)
    text = (text || '').replace(reg, ' ');
    return text;
}
// console.log(safeHtml('<<script src="a"></script>script src="abc"></scrip<script src="a"></script>t>'))
// console.log(safeHtml('<p>faj</p><script src="hehihie"></script>'))

export function getAssetFile(url) {
    return new URL(`../assets/img/annotation/${url}`, import.meta.url).href
}