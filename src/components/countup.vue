<template>
	<span />
</template>

<script>
import { CountUp} from 'countup.js';
import utils from 'root/utils';

const typeOf = type => object => Object.prototype.toString.call(object) === `[object ${type}]`;

// const isString = typeOf('String');
// const isObject = typeOf('Object');
const isFunction = typeOf('Function');

export default {
	__countup__: CountUp,
	name: 'VueCountUp',
	props: {
		delay: {
			type: Number,
			required: false,
			default: 0
		},
		endVal: {
			type: Number,
			required: true
		},
		options: {
			type: Object,
			required: false
		}
	},
	data() {
		return {
			instance: null,
			hasPlay: false
		};
	},
	// computed: {},
	watch: {
		endVal: {
			handler(value) {
				const that = this;

				if (that.instance && isFunction(that.instance.update)) {
					that.instance.update(value);
				}
			},
			deep: false
		}
	},
	methods: {
		create() {
			const that = this;
			if (that.instance) {
				return;
			}

			const dom = that.$el;
			const instance = new CountUp(dom, that.endVal, that.options);

			if (instance.error) {
				// error
				return;
			}

			that.instance = instance;
		},
		destroy() {
			const that = this;
			cancelAnimationFrame(this.instance.rAF);
			that.instance = null;
		},
		printValue(value) {
			const that = this;

			if (that.instance && isFunction(that.instance.printValue)) {
				return that.instance.printValue(value);
			}
		},
		start(callback) {
			const that = this;
			that.hasPlay = true;
			if (that.instance && isFunction(that.instance.start)) {
				this.instance.reset();
				return that.instance.start(callback);
			} else {
				console.warn('this has not instance');
			}
		},
		pauseResume() {
			const that = this;

			if (that.instance && isFunction(that.instance.pauseResume)) {
				return that.instance.pauseResume();
			}
		},
		reset() {
			const that = this;

			if (that.instance && isFunction(that.instance.reset)) {
				return that.instance.reset();
			}
		},
		update(newEndVal) {
			const that = this;

			if (that.instance && isFunction(that.instance.update)) {
				return that.instance.update(newEndVal);
			}
		},

		onScroll() {
			let offsetTop = this.$el.getBoundingClientRect().top;
			if (offsetTop < window.innerHeight && this.hasPlay == false) {
				this.start();
			}
		}
	},

	mounted() {
		const that = this;
		// console.log('mounted');
		that.create();

		utils.emitter.$on('scroll', this.onScroll);
		setTimeout(() => {
			this.onScroll();
		});
	},

	beforeDestroy() {
		const that = this;
		that.destroy();
		utils.emitter.$off('scroll', this.onScroll);
	}
};
</script>

<style lang="less" scoped></style>
