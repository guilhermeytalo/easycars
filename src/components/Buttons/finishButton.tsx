import React, {Component} from "react";
import {OutlineAdd} from "./buttonsStyle";
import PropTypes from "prop-types";

export class FinishButton extends Component<any, any>{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }


    render() {
        return (
            <OutlineAdd onClick={this.props.onSubmit}>
                Finalizar
            </OutlineAdd>
        )
    }

}
