import  {useEffect} from 'react'
import {connect} from 'react-redux'
import  {axiosValute} from '../redux/action/AxiosAction'



const AxiosComponent = (props) => {
    useEffect(() => {
      props.axiosValute()
        console.log('render')
    },[])
    return null

}
function mapStateToProps(state) {
    return {
        manyCourse: state.AxiosReducer.manyCourse


    }
}
//
 function mapDispatchToProps(dispatch) {
    return {
        axiosValute: () => dispatch(axiosValute())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AxiosComponent);