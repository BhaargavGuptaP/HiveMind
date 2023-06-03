import { useEffect, useState } from "react";
// import { Web3Auth } from "@web3auth/modal";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import RPC from "./web3RPC";
import "./App.css";
import "./app1.css";
const clientId =
  "BMkKHE4n2KgzLWFXDmpCVIpWMggQ8Pe8_4pRkbm9aNafKnn0WRlb1zoy6JlOh2nN2Aw54jIAbFbsAUut3tuJr8w"; // get from https://dashboard.web3auth.io

function App() {
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [chainId, setChainId] = useState("");
  const [userData, setUserData] = useState({});

  let styles = {
    button: {
      width: "100%",
      maxWidth: 200,
      cursor: "pointer",
      background: "#8347E5",
      border: "1px solid #8347E5",
      boxSizing: "border-box",
      borderRadius: "15px",
      fontSize: 16,
      color: "#000000",
      fontWeight: 700,
      padding: "12px 30px 12px 30px",
      marginTop: 15,
      display: "flex",
      justifyContent: "center",
    },
  };
  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x13881",
            rpcTarget: "https://rpc-mumbai.maticvigil.com/",
          },
        });

        setWeb3auth(web3auth);
        await web3auth.initModal();
        setProvider(web3auth.provider);
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };
  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.logout();
    setProvider(web3authProvider);
    setBalance("");
    setAddress("");
    setUserData({});
    setChainId("");
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    setUserData(user);
    console.log(user);
  };

  const getChainId = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
    setChainId(chainId);
  };
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    setAddress(address);
    console.log(address);
  };

  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    setBalance(balance);
    console.log(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    console.log(receipt);
  };
  const sendContractTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendContractTransaction();
    console.log(receipt);
  };

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    console.log(privateKey);
  };
  const loggedInView = (
    <>
      {/* <button onClick={logout} className="card" style={styles.button}>
        Logout
      </button> */}
      <header>
        <div className="name">
          <img className="img1" src={require("./logo.png")} alt="" />
          <p>Hive Mind</p>
        </div>

        <nav>
          <ul className="nav_links">
            <li>
              <img className="img2" src={require("./images/boy.png")} alt="" />
            </li>
            <li>
              <p>0ibbu16t7289t1287tWEV45VWA4657Eb6t27tb89271y286t!</p>
            </li>
          </ul>
          <div className="option">
            <a href="metamask">
              <button>
                <img className="img" src={require("./images/fox.png")} alt="" />
              </button>
            </a>
            <a href="logout">
              <button>
                <img
                  src={require("./images/exit.png")}
                  className="img"
                  alt=""
                  onClick={logout}
                />
              </button>
            </a>
          </div>
        </nav>
      </header>
      <div className="x">
        <div className="navigation">
          <ul>
            <li className="list">
              <a href="#">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">Home</span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                  <ion-icon name="bulb-outline"></ion-icon>
                </span>
                <span className="title">Minds</span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                  <ion-icon name="telescope-outline"></ion-icon>
                </span>
                <span className="title">Hives</span>
              </a>
            </li>
            <li className="list active">
              <a href="#">
                <span className="icon">
                  <ion-icon name="person-outline"></ion-icon>
                </span>
                <span className="title">Profile</span>
              </a>
            </li>
          </ul>
          <li className="list1">
            <a href="#">
              <span className="icon">
                <ion-icon name="exit-outline"></ion-icon>
              </span>
              <span className="title">Logout</span>
            </a>
          </li>
        </div>
        <div className="qqq">
          <div className="full">
            <h1>Browse our Art and ./images Gallery</h1>
            <h2>Open to every Buyers and NFTs enthusiasts</h2>
            <div className="p">
              <h3>Connect with us Through</h3>
              <h2 className="picasso">CryptoPicasso</h2>
            </div>
            <button className="button1">
              <a href="http://localhost:3001/">
                {" "}
                <p>Click here</p>
              </a>
            </button>
          </div>
        </div>
        <div className="qqq">
          <div className="form">
            <form id="ideaForm">
              <div className="form-group">
                <label for="ideaTitle">Idea Title:</label>
                <input type="text" id="ideaTitle" name="ideaTitle" required />
              </div>
              <div className="form-group">
                <label for="ideaDescription">Idea Description:</label>
                <textarea
                  id="ideaDescription"
                  name="ideaDescription"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label for="technicalField">Technical Field:</label>
                <input
                  type="text"
                  id="technicalField"
                  name="technicalField"
                  required
                />
              </div>
              <div className="form-group">
                <label for="claims">Claims:</label>
                <textarea
                  id="claims"
                  name="claims"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label for="walletAddress">Wallet Address:</label>
                <input
                  type="text"
                  id="walletAddress"
                  name="walletAddress"
                  required
                />
              </div>
              <div className="form-group">
                <label for="documentUpload">Document Upload:</label>
                <input
                  type="file"
                  id="documentUpload"
                  name="documentUpload"
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" onclick="nxt()">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="qqq">
          <div className="cntnt">
            <div className="subcon">
              <div className="igcon">
                <img
                  src={require("./images/7.jpg")}
                  alt="nope"
                  className="ig"
                />
              </div>
              <div className="ideadet" onclick="nxtpg()">
                <div className="ideaname">IdeaName: Dream Catcher</div>
                <div className="ideades">
                  Description: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque adipisci temporibus ipsa aliquam
                  soluta exercitationem possimus qui.
                </div>
                <div className="ideaprice">Price: 3.2 (ETH)</div>
              </div>
            </div>
            <div className="txtcon">
              <div className="txt" onclick="openPopup()">
                Invest
              </div>
              <div className="popup" id="popup">
                <h1>Invest</h1>
                <input type="text" placeholder="7.2 ETH" className="inpbx" />
                <button onclick="closePopup()" className="btnalrt">
                  Invest Now
                </button>
              </div>
              <div className="txt">Buy Ownership</div>
              <div className="txt">Plan Partial Ownership</div>
            </div>
          </div>
          <div className="cntnt">
            <div className="subcon">
              <div className="igcon">
                <img
                  src={require("./images/7.jpg")}
                  alt="nope"
                  className="ig"
                />
              </div>
              <div className="ideadet">
                <div className="ideaname">IdeaName: FarmEasy</div>
                <div className="ideades">
                  Description: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque adipisci temporibus ipsa aliquam
                  soluta exercitationem possimus qui.
                </div>
                <div className="ideaprice">Price: 3.2 (ETH)</div>
              </div>
            </div>
            <div className="txtcon">
              <div className="txt" onclick="openPopup()">
                Invest
              </div>
              <div className="popup" id="popup">
                <h1>Invest</h1>
                <input type="text" placeholder="7.2 ETH" className="inpbx" />
                <button onclick="closePopup()" className="btnalrt">
                  Invest Now
                </button>
              </div>
              <div className="txt">Buy Ownership</div>
              <div className="txt">Plan Partial Ownership</div>
            </div>
          </div>
          <div className="cntnt">
            <div className="subcon">
              <div className="igcon">
                <img
                  src={require("./images/7.jpg")}
                  alt="nope"
                  className="ig"
                />
              </div>
              <div className="ideadet">
                <div className="ideaname">IdeaName: TinyJPG</div>
                <div className="ideades">
                  Description: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque adipisci temporibus ipsa aliquam
                  soluta exercitationem possimus qui.
                </div>
                <div className="ideaprice">Price: 2.5 (ETH)</div>
              </div>
            </div>
            <div className="txtcon">
              <div className="txt" onclick="openPopup()">
                Invest
              </div>
              <div className="popup" id="popup">
                <h1>Invest</h1>
                <input type="text" placeholder="7.2 ETH" className="inpbx" />
                <button onclick="closePopup()" className="btnalrt">
                  Invest Now
                </button>
              </div>
              <div className="txt">Buy Ownership</div>
              <div className="txt">Plan Partial Ownership</div>
            </div>
          </div>
          <div className="cntnt">
            <div className="subcon">
              <div className="igcon">
                <img
                  src={require("./images/7.jpg")}
                  alt="nope"
                  className="ig"
                />
              </div>
              <div className="ideadet">
                <div className="ideaname">IdeaName: Hive Mind</div>
                <div className="ideades">
                  Description: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque adipisci temporibus ipsa aliquam
                  soluta exercitationem possimus qui.
                </div>
                <div className="ideaprice">Price: 7.2 (ETH)</div>
              </div>
            </div>
            <div className="txtcon">
              <div className="txt" onclick="openPopup()">
                Invest
              </div>
              <div className="popup" id="popup">
                <h1>Invest</h1>
                <input type="text" placeholder="7.2 ETH" className="inpbx" />
                <button onclick="closePopup()" className="btnalrt">
                  Invest Now
                </button>
              </div>
              <div className="txt">Buy Ownership</div>
              <div className="txt">Plan Partial Ownership</div>
            </div>
          </div>
          <div id="ideanm"></div>
          <div id="ideads"></div>
          <div id="idepr"></div>
          <div className="space"></div>
        </div>
        <div className="qqq active">
          <div className="opt">
            <img className="img1" src="./images/rise.png" alt="" />
            <h2>Overview</h2>
          </div>
          <div className="profile">
            <div className="pic">
              <img className="usrpic" src="./images/boy.png" alt="" />
            </div>
            <div>
              <p>Welcome, John Doe</p>
              <p>0ibbu16t7289t1287tWEV45VWA4657Eb6t27tb89271y286t!</p>
              <div className="verified">
                <img className="img1" src="./images/check 1.png" alt="" />
                <p>Verified</p>
              </div>
            </div>
          </div>
          <div className="spends">
            <div className="earn_crypto">
              <h3>Investment tracks</h3>
              <p>Total earnings</p>
              <div className="q">
                <img className="img" src="./images/ethereum.png" alt="" />
                <p>68.7123</p>
              </div>
              <p>Total spending</p>
              <div className="q">
                <img className="img" src="./images/ethereum.png" alt="" />
                <p>171.34</p>
              </div>
            </div>
            <div className="earn_crypto">
              <h3>Invested Amount</h3>
              <p>Total invested</p>
              <div className="q">
                <img className="img" src="./images/ethereum.png" alt="" />
                <p>56.723</p>
              </div>
              <p>Total returned</p>
              <div className="q">
                <img className="img" src="./images/ethereum.png" alt="" />
                <p>71.04</p>
              </div>
            </div>
          </div>
          <div className="graph">
            <h3>Graphical represntation</h3>
            <img src="./images/Rectangle 7.png" alt="" />
          </div>
        </div>
        <div className="nxpg">
          <div className="cls" onclick="prvpg()">
            close
          </div>
          <div className="ffcon">
            <div className="fcon">
              <div className="i1">
                <img src={require("./images/7.jpg")} alt="" className="nft" />
              </div>
              <div className="n1">
                <div className="nameid">
                  <b>Idea Name:</b>
                  <br />
                  <br />
                  <s></s> HiveMind
                  <br />
                  <br />
                </div>
                <div className="descid">
                  <b>Idea Description: </b>
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  consequatur velit nostrum perferendis ab consequuntur atque
                  odio repudiandae exercitationem eos?
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div className="con2">
              <div className="gig">
                <div className="gcon"></div>
                <div className="gcon"></div>
                <div className="gcon"></div>
                <div className="gcon"></div>
                <div className="gcon"></div>
              </div>
              <div className="both">
                <div className="txchid">
                  <div className="hdtechid">Technical Field</div>
                  <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>Smart Contract</li>
                    <li>Web3auth</li>
                    <li>Polygon</li>
                  </ul>
                </div>
                <div className="clmid">
                  <div className="hdclmid">Claims</div>
                  <div className="clms">
                    --- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, illum?
                  </div>
                  <div className="clms">
                    --- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, illum?
                  </div>
                  <div className="clms">
                    --- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, illum?
                  </div>
                  <div className="clms">
                    --- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, illum?
                  </div>
                </div>
              </div>
            </div>
            <div className="con3">
              <div className="inv1">Invest</div>
            </div>
            <div className="con4">
              <div className="flown">Buy Full Ownership</div>
            </div>
            <div className="con5">
              <div className="hdpr">Partial Ownership</div>
              <div className="conpr">
                <div className="nm">Sam</div>
                <div className="prnm">2 ETH</div>
              </div>
              <br />
              <div className="conpr">
                <div className="nm">Ram</div>
                <div className="prnm">2 ETH</div>
              </div>
              <br />
              <div className="conpr">
                <div className="nm">Shyam</div>
                <div className="prnm">2 ETH</div>
              </div>
              <br />
              <div className="by1">
                <div className="bysub">Buy Partial Ownership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const unloggedInView = (
    <div className="container5">
      <header>
        <div className="company">
          <img className="im" src="./logo.png" alt="logo" />
          <h2 className="logo">
            <p>Hive Mind</p>
          </h2>
        </div>

        <nav className="navigation1">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Contact</a>
          <button className="login">Login</button>
        </nav>
      </header>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">
              Discover Variety of ideas from <span>Hive Mind</span>
            </h1>

            <p className="hero-text">
              Partner with one of the world’s largest and secured investing
              marketplace.
            </p>

            <div className="btn-group">
              <button className="btn_btn-secondary">Join now</button>
            </div>
          </div>
        </div>
      </section>
      <div className="wrapper">
        <span className="icon-close">
          <ion-icon name="close-outline"></ion-icon>
        </span>

        <div className="form-box login">
          <h2>Login</h2>
          <div className="space100"></div>
          <button onClick={login} className="btn">
            Login/SignUp
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        color: "white",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
    >
      <div className="row">
        <div className="col-md-3">
          {" "}
          <div className="grid">{provider ? loggedInView : unloggedInView}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
