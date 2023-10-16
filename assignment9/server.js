const fs = require('fs');
const http = require('http');

const hostname = 'localhost';
const port = 3000;


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    readMsg((data) => {
        res.write(data);
        res.end();
    });
  });

let readMsg = (callback) => {
    fs.readFile('cloth1.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            callback('Error reading the file');
        } else {
            callback(data);
        }
    });
}


// จำนวนเสื้อผ้าตามที่กำหนด
let editJson = (data) => { 
    const stock = {
        item1: 12,
        item2: 13,
        item3: 50,
        item4: 22,
        item5: 55,
        item6: 87,
        item7: 12,
        item8: 29,
        item9: 10
    }
    fs.writeFile('cloth1.json', JSON.stringify(stock), 'utf8', (err) => {
        if (err) {
            console.error(err);
            callback('Error writing the file');
        } else {
            writeMsg(stock, callback);
        }
    });

}

let writeMsg = () =>{
    fs.writeFile('new_cloth.json', JSON.stringify(data), 'utf8', (err) => {
        if (err) {
            console.error(err);
            callback('Error writing the new file');
        } else {
            callback(null);
        }
    });
}

server.listen(port, hostname, () => {
console.log(`Server running at   http://${hostname}:${port}/`);
});