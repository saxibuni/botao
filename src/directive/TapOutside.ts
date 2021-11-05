
export default {
    install: (Vue: any) => {
        // const tap = 'ontouchend' in document ? 'touchend' : 'click';
        const tap = "click";

        Vue.directive('tap-outside', {
            bind: (el: any, binding: any) => {
                let { handler, active } = binding.value; 
                el.handler = (e: MouseEvent | TouchEvent) => {
                    if (el.contains(e.target)) {
                        return false;
                    }
                    handler(e);
                }
                if (active) {
                    setTimeout(() => {
                        document.addEventListener(tap, el.handler);
                    }, 0);
                }
            },
            update: (el: any, binding: any) => {
                let active = binding.value.active;
                if (binding.oldValue.active == active) return;

                if (binding.value.active) {
                    setTimeout(() => {
                        document.addEventListener(tap, el.handler);
                    }, 0);
                } else {
                    document.removeEventListener(tap, el.handler);
                }
            },
            unbind: (el: any) => {
                document.removeEventListener(tap, el.handler);
                el.handler = null;
            }
        });
    }
}