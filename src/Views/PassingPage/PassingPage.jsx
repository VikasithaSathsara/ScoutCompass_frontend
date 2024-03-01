import "./PassingPage.css";
import SideMenu from "../../Components/SideMenu/SideMenu";

function PassingPage() {
    return (
        <div>
            <SideMenu />
            <h1>Passings</h1>
            <div class="container">
                <div class="passingcard" id="passingcard1">
                    <div className="badge" id="badge1"></div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="innercontent">
                        <h2>01</h2>
                        <h3>MEMBERSHIP AWARD</h3>
                        <p>14 Requirments</p>
                        <a href="/membershipaward">Start Passing</a>
                    </div>
                </div>
                <div class="passingcard" id="passingcard2">
                    <div className="badge" id="badge2"></div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="innercontent">
                        <h2>02</h2>
                        <h3>SCOUT AWARD</h3>
                        <p>23 Requirments</p>
                        <a href="./scoutaward">Start Passing</a>
                    </div>
                </div>
                <div class="passingcard" id="passingcard3">
                    <div className="badge" id="badge3"></div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="innercontent">
                        <h2>03</h2>
                        <h3>CHIEF COMMISIONER AWARD</h3>
                        <p>23 Requirments</p>
                        <a href="./chiefcommissioneraward">Start Passing</a>
                    </div>
                </div>
                <br />
                <div class="passingcard" id="passingcard3">
                    <div className="badge" id="badge4"></div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="innercontent">
                        <h2>04</h2>
                        <h3>PRIME MINISTER AWARD</h3>
                        <p>22 Requirments</p>
                        <a href="./primeministeraward">Start Passing</a>
                    </div>
                </div>

                <div class="passingcard" id="passingcard3">
                    <div className="badge" id="badge5"></div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="innercontent">
                        <h2>05</h2>
                        <h3>PRESIDENT'S AWARD</h3>
                        <p>13 Requirments</p>
                        <a href="./presidentaward">Start Passing</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PassingPage;
