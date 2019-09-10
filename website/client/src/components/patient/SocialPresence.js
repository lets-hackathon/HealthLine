import React,{useContext,useEffect,useState} from "react"
import {Radar} from "react-chartjs-2"
import Sidebar from '../layout/SideBar';
import AuthContext from '../../context/auth/authContext';
import axios from "axios";


const ChartPage = (props) => {
  const [data,setData]=useState({
    surprise:0.00,
    anger:0.00,
    love:0.00,
    joy:0.00,
    sadness:0.00,
    fear:0.00
  });
  const {surprise,anger,love,joy,sadness,fear}=data;
  const authContext=useContext(AuthContext);
  const radarData = {
    labels: ['surprise', 'anger', 'love', 'joy', 'sadness', 'fear'],
    datasets: [
      {
        label: 'Twitter',
        backgroundColor: 'rgba(255, 255, 153, 0.2)',
        borderColor:  'rgba(255, 255, 153, 1)',
        pointBorderColor: 'rgba(255, 255, 153, 1)',
        pointBackgrounColor: 'rgba(255, 255, 153, 1)',
        pointRadius: 1,
        data: [surprise,anger,love,joy,sadness,fear]
       }
    
    ]
  }

  useEffect(() => {
    authContext.loadUser();
    async function fetchData() {
      console.log("run effect");
      // You can await here
      const response = await axios.get("http://localhost:5000/api/emotions");
      console.log("Eureka!");
      setData({
        love:(response.data.love)*100000,
        joy:(response.data.joy)*100000,
        sadness:(response.data.sadness)*100000,
        fear:(response.data.fear)*100000,
        anger:(response.data.anger)*100000,
        surprise:(response.data.surprise)*100000
      });
      console.log(typeof(response.data.surprise));
      console.log(response.data.surprise);
      console.log(surprise);

    console.log(response);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  return (
              <div class="page-content">

        <Sidebar/>
        <div className="content-wrapper">

        <Radar data={radarData} />
        </div>
    </div>
  )
}

export default ChartPage
  // {
    //   label: 'Charmeleon',
    //   backgroundColor: 'rgba(255, 153, 51, 0.2)',
    //   borderColor: 'rgba(255, 153, 51, 1)',
    //   pointBorderColor: 'rgba(255, 153, 51, 1)',
    //   pointBackgrounColor: 'rgba(255, 153, 51, 1)',
    //   pointRadius: 1,
    //   data: [58, 64, 58, 80, 65, 80]
    // },
    // {
    //   label: 'Charizard',
    //   backgroundColor: 'rgba(255, 0, 0, 0.2)',
    //   borderColor: 'rgba(255, 0, 0, 1)',
    //   pointBorderColor: 'rgba(255, 0, 0, 1)',
    //   pointBackgrounColor: 'rgba(255, 0, 0, 1)',
    //   pointRadius: 1,
    //   data: [78, 84, 78, 109, 85, 100]
    // }