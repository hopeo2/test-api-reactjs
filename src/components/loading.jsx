import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";


const Loading = () => {
    return Array(6).fill({}).map(()=>{
        return(
          <div className="col-4 mb-5 mt-5 text-center p-5">
            <CircleLoader size={80} css={css}/>  
          </div>
        )
      })
};

export default Loading;
