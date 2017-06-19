export function addVisitor(name) {
	return {
		type:"ADD_VISITOR",
		payload:name
	};
}