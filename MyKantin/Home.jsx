import React, { Component, Fragment } from "react";
import Axios from "axios";
// import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faSync } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      per_page: "5",
      current_page: "",
      total_pages: "",
      formName: "",
      userId: "",
      status: "",
      search: "",
      index: ""
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/3`;
    Axios.get(url)
      .then((response, index) => {
        console.log("Data Berhasil didapatkan", response);
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          current_page: response.data.meta.current_page,
          total_pages: response.data.meta.total_pages
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 position-relative pr-4">
              <nav className="navbar py-3 px-4">
                <div className="row">
                  <div className="col-3 text-left">
                    <div className="navbar-brand text-dark">
                      <span className="font-weight-light">
                        <FontAwesomeIcon icon={faBars} />
                      </span>
                      &nbsp;
                      <span className="s5">MyKantin</span>
                    </div>
                  </div>
                  <div className="col-8 float-right">
                    <div className="input-group p-1 rounde bg-light">
                      <span className="p-2 se">
                        <FontAwesomeIcon icon={faSearch} />
                      </span>
                      <input
                        type="text"
                        name="in"
                        id="in"
                        className="form-control bg-transparent m-0 rounded border-0 text-capitalize"
                        placeholder="cari makan bang?"
                      />
                    </div>
                  </div>
                </div>
              </nav>
              <div className="row">
                <div className="col">
                  <div className="card round border-0 bg-orange">
                    <div className="card-body oren text-left p-4">
                      <div className="row">
                        <div className="col-4 text-center">
                          <img
                            id="big"
                            src="https://i.ibb.co/hVbvd4p/undraw-breakfast-psiw-2.png"
                            alt="none"
                          />
                        </div>
                        <div className="col-8 py-4">
                          <h3 className="fb font-weight-bold">
                            Promo Hari Ini
                          </h3>
                          <h5 className="k">Perut Kenyang, hati senang</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 m-4">
                  <div className="float-left">
                    <h4 className="font-weight-bold ka">Kategori</h4>
                  </div>
                  <div className="float-right mr-5">
                    <button className="bttn float-right rounded-pill px-3 font-weight-light text-light f">
                      Lebih Lengkap
                    </button>
                  </div>
                </div>
              </div>
              <div className="row yey m-1 text-center">
                <div className="col-3 px-2 rounde">
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0 p-0"
                    id="semua"
                  >
                    <div className="card-body">Semua</div>
                  </div>
                </div>
                <div className="col-3 px-2 rounde">
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0"
                    id="masakan"
                  >
                    <div className="card-body">Masakan</div>
                  </div>
                </div>
                <div className="col-3 px-2 rounde">
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0"
                    id="pizza"
                  >
                    <div className="card-body">Pizza</div>
                  </div>
                </div>
                <div className="col-3 px-2 rounde">
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0"
                    id="jus"
                  >
                    <div className="card-body">Jus</div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 m-4 mr-5">
                  <div className="float-left">
                    <h4 className="font-weight-bold ka">Populer</h4>
                  </div>
                </div>
              </div>
              <div className="row yey m-1 text-center">
                {this.state.datas.map((data, index) => (
                  <div className="col-3 px-4 rounde">
                    <div
                      className="card py-5 rounde card-category bg-transparent text-light border-0"
                      id=""
                      style={{ backgroundImage: "url(" + data.image + ")" }}
                    >
                      <div className="card-body mt-4 pb-2 pl-2 pt-4">
                        <span className="f name bg-light rounde py-1 px-3 mt-5">
                          {data.waktu}
                        </span>
                      </div>
                    </div>
                    <p className="card-body">{data.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-3 bg-light fixed-right">
              <nav className="navbar bg-transparent">
                <div className="row py-2">
                  <div className="col-3"></div>
                  <div className="col-3">
                    <div className="ha rounded-cirle text-center p-2">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="rounded-cirle bg-warning d3 text-center p-1 mt-3">
                      <span className="">3</span>
                    </div>
                  </div>
                  <div className="col-3 float-right">
                    <div>
                      <img
                        className="rounded-circle profil mt-2"
                        src="https://www.flaticon.com/svg/static/icons/svg/483/483361.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </nav>
              <p className="p">Pesanan Saya</p>
              <div className="row">
                <div className="col">
                  <div className="card cardi rounde p-0 text-light font-weight-light">
                    <div className="card-body">
                      <div id="name">
                        <p>Muhammad Hasan Munif</p>
                        <p>Rp 2.000.000,-</p>
                        <p>00087154315244</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card mt-4">
                    <div className="card-body">
                      <p className="jo card-text">Jonggol,Bogor</p>
                      <table className="table total">
                        <thead>
                          <tr>
                            <th scope="row">Total :</th>
                            <th scope="row">0</th>
                          </tr>
                        </thead>
                      </table>
                      <button
                        type="button"
                        class="btn btn-warning btn-lg btn-block"
                      >
                        Pesan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
