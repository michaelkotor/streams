import React from "react";
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {fetchStream, deleteStream} from "../../actions";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmitDeleteButton = () => {
        this.props.deleteStream(this.props.match.params.id);
    }

    renderActions = (
        <div className="actions">
            <button onClick={e => this.onSubmitDeleteButton()} className="ui primary button">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </div>
    );

    renderContent() {
        if (!this.props.stream) {
            return `Are you sure you want delete this stream?`
        }

        return `Are you sure you want delete stream with title ${this.props.stream.title}`
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        {console.log(0)}
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);