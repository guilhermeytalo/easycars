import React, {Component} from "react";
import {Solid} from "./buttonsStyle";
import PropTypes from 'prop-types';

export default class AddButton extends Component<any, any> {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }



    render() {
        return (
            <Solid onClick={this.props.onSubmit}>
                Adicionar
            </Solid>
        )

    }
}
