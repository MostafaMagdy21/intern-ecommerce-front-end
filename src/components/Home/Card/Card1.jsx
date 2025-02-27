import { Dcard1 } from "./Dcard";

const Card1 = () => {
  return (
    <div className="container cards" >
      <div className="row gx-5 mb-5 ">
        {Dcard1.map((card, i) => (
          <div className="col-lg-3    " key={i}>
            <div className="card-1 m-3 p-2">
              <h4 className="fw-bold">{card.title}</h4>
              <div className="row">
                <div className="col-6">
                  <img src={card.imgs.img1.src} alt={card.imgs.img1.name} />
                  <p className="mt-1 small">{card.imgs.img1.name}</p>
                </div>
                <div className="col-6">
                  <img src={card.imgs.img2.src} alt={card.imgs.img2.name} />
                  <p className="mt-1 small">{card.imgs.img2.name}</p>
                </div>
                <div className="col-6">
                  <img src={card.imgs.img3.src} alt={card.imgs.img3.name} />
                  <p className="mt-1 small">{card.imgs.img3.name}</p>
                </div>
                <div className="col-6">
                  <img src={card.imgs.img4.src} alt={card.imgs.img4.name} />
                  <p className="mt-1 small">{card.imgs.img4.name}</p>
                </div>
                <a href="#" className="text-primary fw-bold mt-2 d-block">
                  {card.link}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;
