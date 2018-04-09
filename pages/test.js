import React from 'react'
import Head from 'next/head'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from '../utils/withRedux'
import Page from '../components/Page'
import { getSwiperInfo } from "../redux/actions/swiperInfo";
class Counter extends React.Component {
    static getInitialProps({ store, isServer }) {
        store.dispatch(serverRenderClock(isServer))
        store.dispatch(addCount())
        return { isServer }
    }

    componentDidMount() {
        this.props.getSwiperInfo();
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div>{}</div>
                <Page title='Other Page' linkTo='/' />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSwiperInfo: bindActionCreators(getSwiperInfo, dispatch),
    }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
