// import spinner from "../asset/image/spinner.gif";

import { Oval } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import "react-loader-spinner/dist/loader/Oval";

function Spinner() {
  return (
    <div className="img-spinner">
      <Oval
        height={80}
        width={80}
        color="#ffffff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ffffff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Spinner;
