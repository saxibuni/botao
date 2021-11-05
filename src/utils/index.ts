import Vue from "vue";
import { Service } from "root/service/Service";
import Device from "./Device";
import { Resolution } from "./Resolution";
import DataUtils from "./DataUtils";

let emitter = new Vue();
let device = new Device();
let resolution = new Resolution();
let service = new Service();

const utils: IUtils = {
  device,
	emitter,
  resolution,
	service
};

export {
  device,
	emitter,
  resolution,
	service
};

export { DataUtils };

interface IUtils {
	emitter: Vue;
	device: Device;
	resolution: Resolution;
	service: Service;
	[key: string]: any
};


export default utils;
