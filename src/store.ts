import Vue from "vue";
import Vuex from "vuex";
import { ScreenState } from "./utils/EnumUtils";
Vue.use(Vuex);

export interface State {
	state: ScreenState;
	dialogVisible: boolean;
	footData: any;
	menuData: any;
	dialog:any;
	dialogDesign:any;
	hasShowCommitTip: boolean;
	deal: boolean;

}

let state: State = {
	state: ScreenState.PORTRAIT,
	dialogVisible: false,
	footData: null,
	menuData: null,
	hasShowCommitTip: false,
	dialog:{
		state:0,
		text: '',
		time: 3000
	},
	dialogDesign:{
		design:false,
		visit:false
	},
	deal: false
}

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
