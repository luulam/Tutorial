const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Tạo một cửa sổ mới với kích thước 800 * 600
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Đây là nội dung của cửa sổ được tạo lên là file index.html
//   win.loadFile('index.html')
  win.loadURL('https://luulam.dev')
}

app.whenReady().then(createWindow)