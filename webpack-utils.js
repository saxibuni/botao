const argvs = process.argv;

const getArgvByKey = (key) => {
	/*
			can't find    =>undefined
			--key         =>true
			--key=value   =>value
			--key value   =>value
	*/
	let value = undefined;
	for (let index = 0; index < argvs.length; index++) {
		const cur = argvs[index],
			next = argvs[index + 1];
		if (new RegExp(`^--${key}(=\\w+)?$`).test(cur)) {
			if (new RegExp(`^--${key}$`).test(cur)) { //--key value
				value = (!next || (next && new RegExp(`^--\\w+(=\\w+)?$`).test(next))) ? true : next;
			} else { //--key=value
				value = cur.split("=")[1]
			}
			break
		}
	}
	return value
};


module.exports = {
	getArgvByKey
}
