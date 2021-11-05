import Vue from "vue";
import Vuex from "vuex";
import { ScreenState } from "./utils/EnumUtils";
Vue.use(Vuex);

export interface State {
	state: ScreenState;
	dialogVisible: boolean;
	footData: any;
	menuData: any;
}

let state: State = {
	state: ScreenState.PORTRAIT,
	dialogVisible: false,
	footData: null,
	menuData: null
};

let getters = {
	isPortrait(state: State) {
		return state.state === ScreenState.PORTRAIT
	}
};

const store = new Vuex.Store({
	getters,
	state
});

export default store;
