import {connect} from "react-redux";
import { compose } from 'redux';
import Layout from '../shared/Layout';

export default Component => compose(
    connect(state => state),
    Layout
)(Component);