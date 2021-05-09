import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-miniheader',
  templateUrl: './miniheader.component.html',
  styleUrls: ['./miniheader.component.scss']
})
export class MiniheaderComponent implements OnInit {

  constructor(private electron: ElectronService) { }

  ngOnInit() {
  }
  button(str) {
    switch (str) {
      case 'min':
        var a = this.electron.ipcRenderer.sendSync("fullscreen-toggle", {
          msg: str
        });
        break;
      case 'max':
        var a = this.electron.ipcRenderer.sendSync("fullscreen-toggle", {
          msg: str
        });
        break;
      case 'close':



          sweetAlert("Are you sure?", {
            buttons: ["No", "Yes!"],
          })
            .then((willDelete) => {
              if (willDelete) {
                sweetAlert("Loading")
                this.electron.ipcRenderer.sendSync('overlay-close')
              } 
            });
       
        break;

      default:
        break;
    }
  }
}
