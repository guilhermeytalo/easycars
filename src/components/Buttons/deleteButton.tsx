import React, {Component} from "react";
import {OutlineCancel} from "./buttonsStyle";
import PropTypes from "prop-types";

export class DeleteButton extends Component<any, any>{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }


    render() {
        return (
            <OutlineCancel onClick={this.props.onSubmit}>
                Excluir
            </OutlineCancel>
        )
    }


}
