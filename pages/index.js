import React, { Component } from 'react';
import Head from 'next/head';
import NavG from '../components/nav/nav';
import Swiper from '../components/swiper/swiper';
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from '../utils/withRedux'
import { getSwiperInfo } from "../redux/actions/swiperInfo";

class Counter extends React.Component {
      // 服务器渲染数据区域
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())
    return { isServer }
  }
    // 正常生命周期
  componentDidMount () {

    this.props.getSwiperInfo();
    // this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    // clearInterval(this.timer)
  }

  render () {
    return (
      <div className="App">
        <style global jsx>{`
          a {
            color: #fff;
            font-size: 14px;
          }
          a:hover,
          a:focus {
            color: #fff;
            text-decoration: none;
          }
          li {
            list-style: none;
          }
          .App {
            text-align: center;
          }
          .App-logo {
            animation: App-logo-spin infinite 20s linear;
            height: 80px;
          }
          .App-header {
            background-color: #222;
            height: 150px;
            padding: 20px;
            color: white;
          }
          .App-title {
            font-size: 1.5em;
          }
          .App-intro {
            font-size: large;
          }
          @keyframes App-logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .carousel-inner {
              height: 500px;
          }
          .panel {
            border: none!important;
          }
        `}
    </style>
        <Head>
          <title>12312</title>
          <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="xxxx" content="123123" />
        </Head>
        <NavG></NavG>
        <Swiper></Swiper>
        
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
