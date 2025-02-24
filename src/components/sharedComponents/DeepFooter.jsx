
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
      </div>
    </div>
   
    </>
  );
};

export default DeepFooter;
