import React ,{ useState, useEffect } from "react";

import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, { ButtonColors} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import { connect } from 'react-redux';
import { Link , useHistory} from 'react-router-dom';
import Select from 'react-select'
import { customStyles } from '../../../utils/selectStyle'
import API from '../../api'
import "../../scss/admin/Admin.scss";

import actions from '../../../redux/actions';
const { selectJobcode }  = actions;

const ClientSelect = (props) => {
  const history = useHistory();

  const [client , setClient] = useState(props?.admin?.jobcode || null);
  const [clientList , setClientList] = useState([]);

  useEffect(()=>{
    async function getJobcodes(){
      const list: any = await API.getJobcodes().catch(err => console.log(err))
      if (list && list?.data?.results?.jobcodes){
        const clientList = list?.data?.results?.jobcodes;
        const transformedList : any = [];
        Object.keys(clientList).forEach(id => {
          transformedList.push({
            label : clientList[id].name,
            value : clientList[id].id,
          })
        })
        setClientList(transformedList);
      }
    }
    getJobcodes();
  },[]);

  const handleOnChange= (newValue:any)=>{
    setClient(newValue);
  }

  const saveClient = () => {
    props.selectJobcode(client)
    history.push('/dashboard');
  }

  return (
    <>
      <BackgroundContainer solid />
      <InformationContainer white>
        <div className="mb-5">
          <Link 
              className="custom-button-small custom-button-blue position-relative" 
              to={{pathname: '/dashboard',}}>
                <span className='button-text'>Back</span>
          </Link>
        </div>
        <form>
          <div className="client-search">
            <label>Type in Client Name</label>
            <Select 
              isClearable
              styles={customStyles} 
              isSearchable={true} 
              options={clientList}
              defaultValue={client}
              onChange={handleOnChange}
            >
            </Select>
          </div>
          <CustomButton
            id={"client-save"}
            color={ButtonColors.orange}
            text={"Save Changes"}
            onClickedButton={saveClient}
          />
        </form>
      </InformationContainer>
    </>
  );
}
const mapDispatchToProps = {
  selectJobcode
};
const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(ClientSelect);
