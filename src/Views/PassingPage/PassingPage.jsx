import "./PassingPage.css";
import Menu from "../../Components/Menu/Menu";

function PassingPage() {
    return (
        <div>
            <Menu />
            <h1>Passings</h1>

            <div id="container1">
                <div id="products-container1">
                    <div class="product" id="first">
                        <h2 className="awardname">MEMBERSHIP AWARD</h2>
                        <h3 className="amount">14 Requirments</h3>
                    </div>

                    <div class="product" id="second">
                        <h2 className="awardname">SCOUT AWARD</h2>
                        <h3 className="amount">23 Requirments</h3>
                    </div>

                    <div class="product" id="third">
                        <h2 className="awardname">CHIEF COMMISSIONER AWARD</h2>
                        <h3 className="amount">23 Requirments</h3>
                    </div>
                </div>
            </div>

            <div id="products-container2">
                <div class="product" id="fourth">
                    <h2 className="awardname">PRIME MINISTER AWARD</h2>
                    <h3 className="amount">22 Requirments</h3>
                </div>

                <div class="product" id="fifth">
                    <h2 className="awardname">PRESIDENT AWARD</h2>
                    <h3 className="amount">13 Requirments</h3>
                </div>
            </div>
        </div>
    );
}

export default PassingPage;
