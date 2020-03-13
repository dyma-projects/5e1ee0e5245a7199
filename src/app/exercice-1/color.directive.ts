import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[appColor]"
})
export class ColorDirective {
  constructor(private el: ElementRef) {}
  @HostListener("window:keyup", ["$event"]) windowOnkeyUp($event) {
    if ($event.key === "ArrowUp") {
      this.el.nativeElement.style.color = "red";
    }
    if ($event.key === "ArrowDown") {
      this.el.nativeElement.style.color = "black";
    }
    if ($event.key === "ArrowLeft") {
      this.el.nativeElement.style.color = "blue";
    }
    if ($event.key === "ArrowRight") {
      this.el.nativeElement.style.color = "green";
    }
  }
}
