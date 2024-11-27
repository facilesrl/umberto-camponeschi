import { Component, HostListener, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-scroll-manager',
  standalone: true,
  imports: [],
  templateUrl: './scroll-manager.component.html',
  styleUrl: './scroll-manager.component.css'
})
export class ScrollManagerComponent {

    scroll_position: number;
    scroll_step: number;
    current_step:number;

    constructor() {
        this.scroll_position = 0;
        this.scroll_step = 16;
        this.current_step=0;
    }

    @Output() scrollStepChanged: EventEmitter<number> = new EventEmitter<number>();

    @HostListener('window:scroll',[])
        onWindowScroll():void{ 
            this.scroll_position = window.scrollY;
            this.current_step = this.getStep(this.scroll_position);
            this.scrollStepChanged.emit(this.current_step)
        }
    

    getStep(scroll_position:number): number {
    
        let step = 0;
        step = this.getFloor(scroll_position);
        return step;
    }

    getFloor(scroll_position:number):number{
        let division = scroll_position/this.scroll_step;
        division = Math.trunc(division);
        return division;
    }

}
