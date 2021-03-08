import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements AfterViewInit{
  @ViewChildren("focus") focusInput!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.focusInput.get(0)?.nativeElement.focus()
    })
  }

  watch(index: number): void { 
    this.focusInput.get(index)?.nativeElement.value ? this.next(index) : this.prev(index)
  }

  next = (index: number) => {
    if (index == 4){
      this.submit();
    }
    setTimeout(()=>{
      this.focusInput.get(++index)?.nativeElement.focus()
    })
  }

  prev = (index: number) => {
    setTimeout(()=>{
      this.focusInput.get(--index)?.nativeElement.focus()
    })
  }

  submit = () => {
    let otpRaw: string = '';
    this.focusInput.forEach(each => {
      otpRaw+= each.nativeElement.value;
    })
    const otp = Number(otpRaw)
  }
}
