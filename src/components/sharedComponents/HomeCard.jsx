
import "bootstrap/dist/css/bootstrap.min.css";
import slider1 from "../../../src/images/card1.jpg"; 
import slider2 from "../../../src/images/card2.jpg"; 
import slider3 from "../../../src/images/card3.jpg"; 
import slider4 from "../../../src/images/card4.jpg"; 
import slider5 from "../../../src/images/card5.jpg"; 
import slider6 from "../../../src/images/card6.jpg"; 
import slider7 from "../../../src/images/card7.jpg"; 
import slider8 from "../../../src/images/card8.jpg"; 
import slider9 from "../../../src/images/card9.jpg"; 
import slider10 from "../../../src/images/card10.jpg"; 
import slider11 from "../../../src/images/card11.jpg"; 
import slider12 from "../../../src/images/card12.jpg"; 
import slider13 from "../../../src/images/card13.jpg"; 
import slider14 from "../../../src/images/card14.jpg"; 
import slider15 from "../../../src/images/card15.jpg"; 
import slider16 from "../../../src/images/card16.jpg"; 

const HomeCard = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Column 1: Discounts & Installments */}
        <div className="col-md-3">
          <div className="card p-3 text-center bg-light">
            <h5>خصومات و تقسيط بدون فوائد*</h5>
            <div className="row">
              <div className="col-6 p-2">
                <img src={slider1} alt="Bank Offer" className="img-fluid" />
                <p>خصم 10% كود BM150 + تقسيط 6 شهور</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider2} alt="CIB Offer" className="img-fluid" />
                <p>تقسيط بدون فوائد على 6 شهور</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider3} alt="Valu Offer" className="img-fluid" />
                <p>خصم 10% حتى 1000 جنيه</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider4} alt="Credit Agricole" className="img-fluid" />
                <p>تقسيط بدون فوائد على 6 شهور</p>
              </div>
            </div>
            <a href="#">استفيد بالعروض</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 text-center bg-light">
            <h5>خصومات و تقسيط بدون فوائد*</h5>
            <div className="row">
              <div className="col-6 p-2">
                <img src={slider5} alt="Bank Offer" className="img-fluid" />
                <p>خصم 10% كود BM150 + تقسيط 6 شهور</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider6} alt="CIB Offer" className="img-fluid" />
                <p>تقسيط بدون فوائد على 6 شهور</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider7} alt="Valu Offer" className="img-fluid" />
                <p>خصم 10% حتى 1000 جنيه</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider8} alt="Credit Agricole" className="img-fluid" />
                <p>تقسيط بدون فوائد على 6 شهور</p>
              </div>
            </div>
            <a href="#">استفيد بالعروض</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 text-center bg-light">
            <h5>خصومات و تقسيط بدون فوائد*</h5>
            <div className="row">
              <div className="col-6 p-2">
                <img src={slider9} alt="Bank Offer" className="img-fluid" />
                <p>خصم 10% كود BM150 + تقسيط 6 شهور</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider10} alt="CIB Offer" className="img-fluid" />
                <p>تقسيط بدون فوائد على 6 شهور</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider11} alt="Valu Offer" className="img-fluid" />
                <p>خصم 10% حتى 1000 جنيه</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider12} alt="Credit Agricole" className="img-fluid" />
                <p>تقسيط بدون فوائد على 6 شهور</p>
              </div>
            </div>
            <a href="#">استفيد بالعروض</a>
          </div>
        </div>

        {/* Column 2: Budget-Friendly Choices */}
        {/* <div className="col-md-3">
          <div className="card p-3 text-center bg-light">
            <h5>اختيارات على قد الميزانية</h5>
            <div className="row">
              <div className="col-6 p-2">
                <div className="badge bg-primary text-white p-3">
                  أقل من 99 جنيه
                </div>
                <p>العناية بالببت</p>
              </div>
              <div className="col-6 p-2">
                <div className="badge bg-primary text-white p-3">
                  أقل من 149 جنيه
                </div>
                <p>الصحة والجمال</p>
              </div>
              <div className="col-6 p-2">
                <div className="badge bg-primary text-white p-3">
                  أقل من 200 جنيه
                </div>
                <p>إكسسوارات إلكترونيات</p>
              </div>
              <div className="col-6 p-2">
                <div className="badge bg-primary text-white p-3">
                  أقل من 199 جنيه
                </div>
                <p>لوازم البيت والمطبخ</p>
              </div>
            </div>
            <a href="#">اكتشف صفقات أكثر</a>
          </div>
        </div> */}

        {/* Column 3: Ramadan Box */}
        {/* <div className="col-md-3">
          <div className="card text-center p-3 bg-light">
            <h5>كرتونة رمضان | الكمية محدودة</h5>
            <img src={slider5} alt="Ramadan Box" className="img-fluid" />
            <p>
              <del>439 جنيه</del> <strong>385 جنيه</strong>
            </p>
            <a href="#">اطلب صندوقك اليوم</a>
          </div>
        </div> */}

        {/* Column 4: Amazon Prime Offers */}
        <div className="col-md-3">
          <div className="card text-center p-3 bg-light">
            <h5>اشترك في برايم وتسوّق عروض رمضان</h5>
            <div className="row">
              <div className="col-6 p-2">
                <img src={slider13} alt="Prime Offers" className="img-fluid" />
                <p>عروض رمضان</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider14} alt="Gaming" className="img-fluid" />
                <p>برايم جيمينج</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider15} alt="Fast Shipping" className="img-fluid" />
                <p>توصيل سريع ومجاني</p>
              </div>
              <div className="col-6 p-2">
                <img src={slider16} alt="Movies" className="img-fluid" />
                <p>برامج تلفزيونية وأفلام عالمية</p>
              </div>
            </div>
            <a href="#">اشترك في برايم</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
