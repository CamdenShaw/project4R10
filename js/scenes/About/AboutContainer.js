import React, { Component } from "react"
import { FlatList, View, ScrollView } from "react-native"
import { connect } from "react-redux"

import { getCodeItems } from "../../redux/modules/conduct"
import Loader from "../../components/Loader"
import About from "./About"
import NavGradient from "../../components/Gradient"

class AboutContainer extends Component {
    static route = {
        navigationBar: {
            title: "About",
            renderBackground: () => <NavGradient />,
            tintColor: "white"
        }
    }

    componentDidMount() {
        this.props.dispatch(getCodeItems())
    }

    render() {
        const { codeOfConduct, isLoading } = this.props
        return isLoading ? <Loader /> : <About data={codeOfConduct} />
    }
}

const mapStateToProps = state => {
    return {
        codeOfConduct: state.conduct.codeOfConduct,
        isLoading: state.conduct.isLoading
    }
}

export default connect(mapStateToProps)(AboutContainer)
