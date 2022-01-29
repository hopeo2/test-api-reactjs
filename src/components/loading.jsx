import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";


const Loading = () => {
    return Array(6).fill({}).map((array, index)=>{
        return(
          <div className="col-4 mb-5 mt-5 text-center p-5" key={index}>
            <CircleLoader size={80} css={css}/>  
          </div>
        )
      })
};

export default Loading;
