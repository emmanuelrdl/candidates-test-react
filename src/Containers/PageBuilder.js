import ACTIONS from "../Modules/Actions"
import { connect } from "react-redux"
import PageBuilder from "../Components/PageBuilder"

const mapStateToProps = state => ({
  components: state.mainReducer.components,
  users: state.mainReducer.users,
  sharedData: state.mainReducer.sharedData,
})

const mapDispatchToProps = dispatch => ({
  fetchComponents: () => dispatch(ACTIONS.fetchComponents()),
  fetchUsers: () => dispatch(ACTIONS.fetchUsers()),
  addSharedData: (code, data) => dispatch(ACTIONS.addSharedData(code, data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageBuilder);
