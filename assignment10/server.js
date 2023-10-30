var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);

var fs = require('fs');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


// read from file to user
//ทำให้สมบูรณ์
app.get('/inmsg', async (req, res) => {
  try {
    const data = await readMsg();
    res.send(data);
  } catch (err) {
    res.status(500).send("Error reading data");
  }
})

//from user, write data to file
//ทำให้สมบูรณ์
app.post('/outmsg', async (req, res) => {
  try {
    const newMsg = req.body.message; // ตัวอย่าง: ถ้าส่งข้อมูลมาผ่าน body เป็น { "message": "ข้อความที่ต้องการเพิ่ม" }
    let data = await readMsg();
    data = JSON.parse(data);
    data = await updateMsg(newMsg, data);
    await writeMsg(data);
    res.send("Data updated successfully");
  } catch (err) {
    res.status(500).send("Error updating data");
  }
})

// read json data from file
//ทำให้สมบูรณ์
const readMsg = () => {
  return new Promise((resolve,reject) => {
      fs.readFile('log.json','utf8', (err, data) => {
        if (err)
          reject(err);
        else
        {
          console.log(data);
          resolve(data);
        }
      })
  })
} 

// update json data
//ทำให้สมบูรณ์
const updateMsg = (new_msg, data1) => {
  return new Promise((resolve,reject) => { 
    data.messages.push(newMsg); // ถ้าข้อมูลเป็นอาร์เรย์ที่มี key 'messages'
    resolve(data);
  });
}

// write json data to file
//ทำให้สมบูรณ์
const writeMsg = (data) => {
  return new Promise((resolve,reject) => {
    fs.writeFile('log.json', JSON.stringify(data), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Data written successfully");
      }
    });
  });
};

var server = http.listen(3001, () => {
  console.log('server is running on port http://localhost:'+ server.address().port);
});