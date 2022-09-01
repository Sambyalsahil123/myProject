// import { useEffect, useState } from "react";


// const App = () => {
//     const [data, setData] = useState([]);


//     const apiData = async () => {
//         const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
//         const FetchData = await res.json();
//         // console.log(FetchData.data[0]);
//         setData(FetchData.data);
//     };
//     useEffect(() => {
//         apiData();
//     }, []);
//     return (

//         <>

//             <div>

//                 {data.map((elm) => {

//                     return (
//                         <ul>
//                             <li>{elm.Nation}</li>
//                             <li>{elm.Year}</li>
//                             <li>{elm.Population}</li>
//                             <li>{elm.Population}</li>
//                             <li>{elm.Population}</li>
//                             <li>{elm.Population}</li>
//                             <li>{elm.Population}</li>
//                             <li>{elm.Population}</li>
//                             <li>{elm.Population}</li>
//                             <li>{elm.Population}</li>
//                             <li>{elm.Population}</li>
//                             <li>{elm.Population}</li>


//                         </ul>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// export default App;
