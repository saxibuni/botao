import store from "root/store";
import { ScreenState } from "./EnumUtils";
import { device, emitter  } from "./";

export class Resolution {
  public state: ScreenState;
  private watchSizeRaf: any;
  private storeWidth: number = 0;

  constructor() {
    window.addEventListener("resize", () => this.onResize());
    window.addEventListener("orientationchange", () => this.onResize());
    emitter.$emit(Events.STATE_CHANGE, this.state);
    emitter.$emit(Events.RESIZE)

    this.onResize();
  }

  private onResize() {
    this.storeWidth = window.innerWidth;
    this.doResize();

    cancelAnimationFrame(this.watchSizeRaf);
    const start = +new Date();
    const step = () => {
      const timeOut = +new Date() - start > 500;
      if (timeOut) return cancelAnimationFrame(this.watchSizeRaf); //超过1s 高度未发生变化说明高度变化已经稳定
      if (this.storeWidth == window.innerWidth) {//检测高度宽度变化是否稳定
        this.watchSizeRaf = requestAnimationFrame(step);
      } else {
        //高度发生了变化，说明第一次的高度获取的不准，此时才是正确高度，重新Resize
        this.doResize();
        cancelAnimationFrame(this.watchSizeRaf);
      }
    };
    step();
  }

  private doResize() {
    this.doState();
    emitter.$emit(Events.RESIZE);
  }

  private doState() {
    let toState = device.screenState;
    if (toState === this.state) return;

    let oldState = this.state;
    this.state = toState;
    store.state.state = toState;

    emitter.$emit(Events.STATE_CHANGE, this.state, oldState);
  }
}


export enum Events{
	STATE_CHANGE = "page-state",
	RESIZE = "page-resize",
}
