import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './tenant-payment.component.html',
  styleUrls: ['./tenant-payment.component.css']
})

export class TenantPaymentComponent{
  title = 'tenantsystem';

  @ViewChild('file', { read: ElementRef })
  file!: ElementRef;

  constructor(private http: HttpClient) { }

  upload() {
    const files = (this.file.nativeElement as HTMLInputElement).files;

    const sendable = new FormData();
    sendable.append('documentTypeId', '302');

    let groups =  
      [{
        "typeId":"0",
        "instanceId":1,
      "keywords":[
        {"typeId":"1","value":"Test"},{"typeId":"290","value":""},{"typeId":"291","value":""},{"typeId":"121","value":""},{"typeId":"330","value":""},{"typeId":"237","value":""}
        ]
      }
      ];
      
      console.log(groups);
    sendable.append('keywordGroups', JSON.stringify(groups));
    // for (let i = 0; i < files.length; i++) {
    //   sendable.append('files', files[i], files[i].name);
    // }

    const request = new HttpRequest('POST',
      'https://localhost:5001/api/upload',
      sendable,
      {
        reportProgress: true
      });

    this.http.request(request)
      .subscribe((event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          // on progress code
        }
        if (event.type === HttpEventType.Response) {
          console.log(event);
          // on response code
        }
      }, error => {
        // on error code
      });
  }

}
