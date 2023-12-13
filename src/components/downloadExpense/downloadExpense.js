
import useDomain from "../customhook/useDomain";
import PreviousExpenseFile from "./previousGeneratedExpense";
import axios from "axios";

const DownloadExpense = () => {
  const domain=useDomain()
 const downloadExpenseHandler=()=>{
    axios
    .get(`${domain}/premiumuser/downloadexpense}`, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      console.log(res.data.file); //we have to create a seperate download btn for premium user for downloading this file
    })
    .catch((err) => {
      console.log(err);
    });
 }
  return (
    <div>
     <button onClick={downloadExpenseHandler}>download expense</button>
     <div>
       <PreviousExpenseFile></PreviousExpenseFile>
     </div>
    </div>
  );
};
export default DownloadExpense
