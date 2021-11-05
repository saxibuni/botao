import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $bus: Vue;
		restartWow: Function;
		resolveSEO: Function;
  }
}
