const api = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

function ajax (keyword) {
    const urlString = api + keyword + "&prop=info&inprop=url&utf8=&format=json"
    console.log(urlString);
}