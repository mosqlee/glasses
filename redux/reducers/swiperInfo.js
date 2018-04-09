import { GET_SWIPER_INFO_REQUEST, GET_SWIPER_INFO_SUCCESS, GET_SWIPER_INFO_FAIL} from '../actions/swiperInfo'

const initState = {
    isLoading: false,
    swiperInfo: { swiperInfo: [] },
    errorMsg: ''
}

export default function reducer(state = initState, action) {
    console.log(action);
    switch (action.type) {
        case GET_SWIPER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                swiperInfo: { swiperInfo: [] },
                errorMsg: ''
            }
            break;
        case GET_SWIPER_INFO_SUCCESS:
            console.log(action.result.data.data)
            return {
                ...state,
                isLoading: false,
                swiperInfo: {swiperInfo: action.result.data.data},
                errorMsg: ''
            }
            console.log(state)
            break;
        case GET_SWIPER_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                swiperInfo: { swiperInfo: [] },
                errorMsg: '请求错误'
            }
            break;
        default:
            return state;
            break;
    }
}