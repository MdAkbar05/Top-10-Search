import useFetch from "./useFetch";
import axios from "axios";

const FetchData = () => {
  const loadingMsg = "Please wait loading data ...";

  const { data, isLoading, error } = useFetch(
    "https://imdb-top-100-movies1.p.rapidapi.com"
  );
  console.log(data);
  //   return (
  //     <div className="container">
  //       <h2 className="m-auto p-2">Real-Time Billionaires</h2>
  //       <table className="Real-Time-Billionaires  p-2 table">
  //         <tr>
  //           <th className="col">Rank</th>
  //           <th className="col">Name</th>
  //           <th className="col">Image</th>
  //           <th className="col">NetWorth</th>
  //           <th className="col">State</th>
  //         </tr>
  //         {data.map((value, index) => (
  //           <tr key={index}>
  //             <th scope="col">{value.rank}</th>
  //             <td>{value.person.name}</td>
  //             <td>{value.finalWorth}</td>
  //             <td>{value.state}</td>
  //           </tr>
  //         ))}
  //       </table>
  //     </div>
  //   );
};

export default FetchData;
