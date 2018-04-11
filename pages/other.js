import React from 'react'
import Head from 'next/head'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from '../utils/withRedux'
import Page from '../components/Page'
import 'isomorphic-unfetch'
class Counter extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    const res = await fetch('http://localhost:3000/static/mockAvatar.json')
    const json = await res.json()
    console.log(json)
    return { stars: json.data.list.length}
    // store.dispatch(serverRenderClock(isServer))
    // store.dispatch(addCount())
    // return { isServer }
  }

  componentDidMount () {
    // this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    // clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {/* <Page title='Other Page' linkTo='/' /> */}
        return (
      <div>
          <p>has how many avatar {this.props.stars} </p>
          {/* <Link prefetch href='/'><a>How about preact?</a></Link> */}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
