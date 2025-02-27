
import { DdeepFooter } from "./Dfooter";

const DeepFooter = () => {
  return (
    <>
    <div className="deepFooter mt-5">
    <div className="container ">
        <div className="row ">
          {DdeepFooter.map((e, i) => {
            return (
              <>
                <div className="col-md-3 mt-5" key={i}>
                  <h3>{e.title}</h3>
                  <p>{e.url}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="feramFooter d-flex justify-content-around align-items-center">
          <p>Conditons of Use & Sale</p>
          <p>Privacy Notice</p>
          <p>Interset-Based Ads</p>
          <p>1996-2024, Amazon.com, Inc. or its affiliates</p>

        </div>
      </div>
    </div>
   
    </>
  );
};

export default DeepFooter;
