import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';

function createWindow(): void {
  const win = new BrowserWindow({
    alwaysOnTop: true,
    backgroundColor: '#2F384B',
    fullscreenable: false,
    frame: false,
    resizable: false,
    useContentSize: true,
    width: 360,
    height: 478,
    icon: path.join(__dirname, '../dist/icon.png'),
    webPreferences: {
      backgroundThrottling: false,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.show();

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

app.disableHardwareAcceleration();
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

export default app;
