const Types = {
	FETCH_USERS: "FETCH_USERS",
	RECEIVE_USERS: "RECEIVE_USERS",
  FETCH_COMPONENTS: "FETCH_COMPONENTS",
	RECEIVE_COMPONENTS: "RECEIVE_COMPONENTS",
  ADD_SHARED_DATA: "ADD_SHARED_DATA",
}

const buildSharedData = (code, data) => {
  const share = {}
  share[code] = data
  return share
}

const receiveUsers = (json) => ({ 
	type: Types.RECEIVE_USERS,
	data: json
})

const receiveComponents = (json) => ({ 
	type: Types.RECEIVE_COMPONENTS,
	data: json
})

const addSharedData = (code, data) => ({
	type: Types.ADD_SHARED_DATA,
	data: buildSharedData(code, data)
})


export function fetchUsers() {

	return function(dispatch) {
		return fetch("http://localhost:3000/api/users")
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json =>
				dispatch(receiveUsers(json))
			)
	}

}


export function fetchComponents() {

	return function(dispatch) {
		return fetch("http://localhost:3000/api/components")
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json =>
				dispatch(receiveComponents(json))
			)
	}

}


export default {
  addSharedData,
	fetchComponents,
  fetchUsers,
	Types,
};
