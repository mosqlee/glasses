import React, { Component } from 'react';
import Head from 'next/head';
import NavG from '../components/nav/nav';
import Swiper from '../components/swiper/swiper';
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock, getInfo } from '../store'
import withRedux from '../utils/withRedux'
import { getSwiperInfo } from "../redux/actions/swiperInfo";
import GlassItem from '../components/glass-item/glass-item'
import Link from 'next/link'
// import axios from 'axios'
import { getGlassList } from '../redux/actions/glassList'
import { getUserList } from '../redux/actions/userShow'
import GlassList from '../components/glass-list/glass-list'
import Footer from '../components/footer/footer'
import SaleCode from '../components/saleCode/saleCode'
import FooterWrap from '../components/footer-wrap/footer-wrap'
class Counter extends React.Component {
      // 服务器渲染数据区域
  static getInitialProps ({ store, isServer }) {
    // console.log(store)
    // store.dispatch(serverRenderClock(isServer))
    // store.dispatch(getSwiperInfo());
  }
    // 正常生命周期
  componentDidMount () {
    console.log(this.props.getSwiperInfo);
    this.props.getSwiperInfo();
    this.props.getGlassList();
    this.props.getUserList();
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

          .panel {
            border: none!important;
          }import SaleCode from './../components/saleCode/saleCode';

          .enter-email-container {
            margin: 50px 0 20px;
            padding: 20px 0;
            width: 100%;
            height: 120px;
            background: url('../static/img/search-bg.png')
          }
          .enter-email-container-nobg {
            margin: 50px 0 20px;
            padding: 20px 0;
            width: 100%;
            height: 120px;
          }
          .enter-email-input{
            display: flex;
            justify-content: center;
          }
          .enter-email{
            width: 319px;
            height: 45px;
          }
          .email-button{
            background: #29c5dc;
            color: #fff;
            border: 1px solid #29c5dc;
            border-radius: 0;
          }
          .glass-cate-container{
            margin: 10px 0;
            height: 265px;
            overflow: hidden;
          }
          .glass-cate-img {
            width: 100%;
          }
          .glass-cate-container a{
            display: block;
            overflow: hidden;
          }
          .glass-cate-img:hover {
            width: 361px;
          }
          .compony-me-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
          }
          .compony-me-container p {
            margin: 0;
            width: 42%;
            height: 1px;
            background: #999;
          }
          .compony-me-container h3{
            margin: 0;
            background: #FFF;
          }
        `}
    </style>
        <Head>
          <title>Firmoo</title>
          <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="xxxx" content="123123" />
          <script src="../static/iconfont.js"></script>
        </Head>
        <NavG></NavG>
        <Swiper></Swiper>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="enter-email-container-nobg">
                <p>
                  <b>Join Us Now & Get 15% Off</b>
                </p>
                <SaleCode></SaleCode>
              </div>
            </div>
            <GlassList></GlassList>
            {/* 底部 */}
            <Footer></Footer>
          </div>
        </div>
        <FooterWrap></FooterWrap>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSwiperInfo: bindActionCreators(getSwiperInfo, dispatch),
    getGlassList: bindActionCreators(getGlassList,dispatch),
    getUserList: bindActionCreators(getUserList,dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
