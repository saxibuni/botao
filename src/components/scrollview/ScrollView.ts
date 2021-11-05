import { Vue, Component, Prop } from "vue-property-decorator";
import { ScrollEvent } from "./ScrollEvent";
import BScroll from 'root/libs/bscroll.esm';

@Component
export default class ScrollView extends Vue {
    @Prop(Object) options: any;
    @Prop({ default: "div" }) scrollerTag: string;
    @Prop({ default: "" }) scrollerStyle: { [key: string]: string };

    @Prop({ default: "div" }) wrapperTag: string;
    @Prop({ default: "" }) wrapperStyle: { [key: string]: string };
    @Prop({ default: "" }) wrapperClass: string | { [key: string]: boolean };

    protected scroll: BScroll;
    protected pointerEvent: string = "auto";
    private ScrollEvent = ScrollEvent.Normal;

    private get scrollView() {
        return <any>this.$refs.scrollView;
    }

    private get scroller() {
        return <any>this.$refs.scroller;
    }

    private initScroll() {
        if (this.scroll) return this.updateScroll();

        const events = [
            "beforeScrollStart",
            "scrollCancel",
            "scrollStart",
            "scrollEnd",
            "scroll",
            "flick"
        ];


        let key, value;
        let attributes = this.scrollView.attributes;
        this.scrollView.scrollTop = 0;
        for (key in attributes) {
            value = attributes[key];
            if (value instanceof Attr && value.name.indexOf("data-v-") > -1) {
                this.scroller.attributes.setNamedItem(
                    document.createAttribute(value.name)
                );
            }
        }

        let defaultOptions = {
            scrollY: true,
            mouseWheel: true,
						click: true,
						preventDefaultException: {
							tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|VIDEO)$/
						},
            flickLimitDistance: 0,
            scrollbar: {
							fade: false,
							interactive: true
						}
        }

        this.scroll = new BScroll(<Element>this.$refs.scrollView, Object.assign({}, defaultOptions, this.options));
        events.forEach(event => {
            this.scroll.on(<any>event, () => this.$emit(event, this.scroll));
        });
        this.registPullEvents();
        this.$emit("ready", this.scroll);
        setTimeout(() => {
            this.updateScroll();
        });
    }

    private updateScroll() {
        this.scroll && this.scroll.refresh();
    }

    private registPullEvents() {
        let distance = 20;
        let point = { x: 0, y: 0 };

        this.scroll.on("scrollCancel", () => {
            this.pointerEvent = "auto";
        });

        this.scroll.on("flick", () => {
            this.pointerEvent = "auto";
        });

        this.scroll.on("scroll", () => {
            if (this.scroll.y == point.y && this.scroll.x == point.x) return;
            point = {
                x: this.scroll.x,
                y: this.scroll.y
            };
            this.pointerEvent = "none";
            if (this.ScrollEvent == ScrollEvent.Normal) {
                if (this.scroll.y > 0 + distance) {
                    this.ScrollEvent = ScrollEvent.Refresh;
                } else if (this.scroll.y < this.scroll.maxScrollY - distance) {
                    this.ScrollEvent = ScrollEvent.Infinite;
                }
            }
            this.$emit("scroll", point);
        });

        this.scroll.on("scrollEnd", () => {
            this.pointerEvent = "auto";
            if (this.ScrollEvent == ScrollEvent.Refresh) {
                this.$emit("pullDown", this.scroll);
            } else if (this.ScrollEvent == ScrollEvent.Infinite) {
                this.$emit("pullUp", this.scroll);
            }
            this.ScrollEvent = ScrollEvent.Normal;
        });
    }

    private destroy() {
        this.scroll && this.scroll.destroy();
        this.scroll = null;
    }

    protected mounted() {
        this.initScroll();
    }

    protected activated() {
        this.updateScroll()
    }

    protected updated() {
        this.updateScroll()
    }

    protected beforeDestroy() {
        this.destroy();
    }


}
