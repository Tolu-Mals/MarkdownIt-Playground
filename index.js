const http = require('http');
const port = 3000;

const MarkdownIt = require('markdown-it');
const md = new MarkdownIt({
    html: true
});

const markdown = 
`# Hello World
<a href="https://facebook.com">Facebook</a>
`;

const html = md.render(markdown);

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
})

app.listen(port);
console.log(`MarkdownIt App started on http://localhost:${port}`);
