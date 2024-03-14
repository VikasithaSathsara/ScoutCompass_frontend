import "./Blogs.css";
import L1 from "../../Assests/logo.png";
import BL2 from "../../Assests/history.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import FGS from "../../Assests/FGS.jpg";
import BP from "../../Assests/b.p.jpg";
import B1 from "../../Assests/Membership2.png";

function ScoutHistory() {
    return (
        <div>
            <div class="fixedbar">
                <div className="bloglogo">
                    <a href="/">
                        <img src={L1} alt="" />
                    </a>
                </div>

                <div class="blog_content">
                    <h4 className="fixedbarh4">Content</h4>
                    <ul className="blog_ul">
                        <li>
                            <a href="#topic-main">World Scout History</a>
                        </li>
                        <li>
                            <a href="#sub-topic-1">
                                Scout History of Sri Lanka
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="other_blogs">
                    <h4 className="fixedbarh4">Other Articles</h4>
                    <ul className="blog_ul">
                        <li>
                            <a href="/scoutpromise">Scout Law and Promise</a>
                        </li>
                        <li>
                            <a href="/scoutingstructure">
                                Scout Vision and Mission
                            </a>
                        </li>
                        <li>
                            <a href="/scoutuniform">Scout Uniform</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="blog_content_container">
                <div class="facts">
                    <div class="_header2">
                        <Button
                            bg="transparent"
                            textColor="black"
                            fontWeight="600"
                            width="100px"
                            borderRadius="40px"
                            leftIcon={<FaArrowLeft />}
                            border="2px solid black"
                            padding="10px"
                            marginRight="10px"
                            onClick={() => window.history.back()}
                            _hover={{ bg: "yellow", textColor: "black" }}
                        >
                            Back
                        </Button>
                        <h1 class="blog_header">Scout History</h1>
                    </div>

                    <div id="blogimage1">
                        <img src={BL2} alt="" />
                    </div>
                    <div className="blog2">
                        <h2 class="topic-main">World Scout History.</h2>
                        <p className="blog2_para">
                            The founder of Scouting is “Lord Robert Stevenson
                            Smith Baden Powell of Gilwell”, affectionately known
                            as B.P. Born on February 22, 1857 in London,
                            England. His father is "Professor Baden Powell of
                            Oxford". Mother was Mrs. “Henrietta Grace Smith
                            Baden Powell”. After completing his education at the
                            age of 19, he joined the army's cavalry corps as a
                            sub-lieutenant and went to India. Later, he went to
                            Africa and fought against the Zulus, the evil
                            Ashanti tribes, and the wild nomads. <br />
                            <br />
                            The book 'Scouting for Boys' written by Lieutenant
                            General Robert Stephen Smith Baden-Powell, who
                            served in the British Army, was the foundation of
                            the scouting movement that began on January 8, 1908.
                            In the summer of 1907, a camp was held on Brownsea
                            Island in England to practice the contents of the
                            book written by Lord Baden Powell and to popularize
                            the Scout movement. It was the beginning of the
                            largest voluntary organization in the world. For
                            Baden Powell, Scouting was his whole life, so he
                            resigned from the military service he had served so
                            far and devoted his entire life to it, traveling
                            around the world and spreading it. <br /> <br />
                            In 1920, the first International Congress of
                            Jamboree was held in London. In this way, step by
                            step, the scouting movement has become known as
                            world youth organizations today. At present, more
                            than 28 million members in more than 216 countries
                            around the world are registered in the World Scout
                            Movement. The Boy Scout motto is "Be Prepared." This
                            means that the scout is always ready to perform his
                            duties with body and mind.
                        </p>

                        <h2 class="topic-main">ලෝක බාලදක්ෂ ඉතිහාසය.</h2>
                        <p className="blog2_para">
                            ලොව පුරා විසිරී සිටින බාලදක්ෂයින් B.P යන ආදර නාමයෙන්
                            හඳුන්වන “ගිල්වෙල්හි රොබට් ස්ටීවන්සන් ස්මිත් බේඩන්
                            පවෙල් සාමිවරයා” බාලදක්ෂ ව්‍යාපාරයේ නිර්මාතෘවරයාය.
                            1857 පෙබරවාරි මස 22 දින එංගලන්තයේ ලන්ඩනයේ උපත ලැබීය.
                            මෙතුමා ගේ පියා “ඔක්ස්ෆර්ඩ් හි මහාචාර්ය බේඩන්
                            පවෙල්”ය. මව “හෙන්රිආටා ග්‍රෙස් ස්මිත් බේඩන් පවෙල්”
                            මැතිණියයි. වයස අවුරුදු 19 දී අධ්‍යාපනය අවසන් කොට උප
                            ලුතිනන් වරයෙකු ලෙස හමුදාවේ අශ්වාරෝහක බලකායට බැඳී
                            ඉන්දියාවට ගියේය.පසුව අප්‍රිකාවට ගිය ඔහු අප්‍රිකාවේ
                            සූළුවරුන්,නපුරු අෂාන්ති ගෝත්‍රිකයින්,වනචාරී මැට
                            බෙල්ලන්ට විරුද්ධව සටන් මෙහෙය විය. <br />
                            <br />
                            බ්‍රිතාන්‍ය හමුදාවේ සේවය කරනු ලැබූ ලුතිතන් ජෙනරාල්
                            රොබට් ස්ටීවන් ස්මිත් බේඩ්න් පවල් විසින් ලියූ
                            'Scouting for Boys' නම් ග්‍රන්ථය, 1908 වසරේ ජනවාරි
                            08 වන දින ඇරඹි බාලදක්ෂ ව්‍යාපාරයේ මූලික අඩිතාලම විය.
                            බේඩ්න් පවල් සාමිවරයා ලියූ ග්‍රන්ථයේ අන්තර්ගත දෑ
                            ප්‍රායෝගිකව සිදුකර බැලීම උදෙසා සහ බාලදක්ෂ ව්‍යාපාරය
                            ප්‍රචලිත කිරීම සඳහා 1907 ගිම්හාන කාලයේ එංගලන්තයේ
                            බ්‍රවුන්සි දූපතේ කඳවුරක් පැවැත්වීය. එය ලොව විශාලම
                            ස්වේච්ඡා සංවිධානයේ ආරම්භය විය. බේඩ්න් පවල්ට බාලදක්‍ෂ
                            ව්‍යාපාරය මුළු ජීවිතයම වූයේය, එහෙයින් මෙතෙක් සේවය කළ
                            හමුදා සේවයෙන් ඔහු අස්වී මුළු ජීවිත කාලයම මෙයට කැප
                            කරමින් ලොව වටා සංචාරය කරමින් එය ව්‍යාප්ත කළේය.
                            <br />
                            <br />
                            1920දී ලන්ඩනයේදී පළමු වන ජාත්‍යන්තර සම්මේලනය
                            ජමිබෝරිය පවත් වන්නට විය. මේ අයුරින් පියවරෙන් පියවර
                            පැමිනි බාලදක්‍ෂ ව්‍යාපාරය අද වන විට ලෝක තරුණ
                            සංවිධානයන් ලෙස ප්‍රචලිත වී ඇත. වර්තමානය වන විට ලොව
                            පුරා රටවල් 216කට අධික ප්‍රමාණයක් සාමාජිකයන් මිලියන
                            28කට වැඩි පිරිසක් ලෝක බාලදක්‍ෂ ව්‍යාපාරයේ ලියාපදිංචි
                            වී සිටිති. බාලදක්‍ෂ ආදර්ශපාඨය වන්නේ "සූදානම්ව
                            සිටිනු" යන්නය. මෙයින් අදහස් වන්නේ බාලදක්‍ෂයා සැම
                            විටම කයින් හා මනසින් තම යුතුකම් ඉටු කිරීමට සූදානම්ව
                            සිටින බවයි.
                        </p>
                    </div>

                    <div className="blog2">
                        <h2 class="topic-main">Scout History of Sri Lanka.</h2>
                        <p className="blog2_para">
                            In 1912, five years after the start of the World
                            Young Talent Movement, the Sri Lankan Young Talent
                            Movement started. In 1912, under the leadership of
                            Englishman F.G.Stevens, Ceylon Scouting started at
                            Matale Christu Deva Vidyalaya. 02 June is considered
                            as the founding day of the Sri Lanka Scout Movement.
                            By 1915, there were 248 scouts all over Sri Lanka,
                            including teachers. The scouting movement started in
                            England in 1907, 5 years later, in 1911, Mr. Baden
                            Powell, an Englishman who was working as a civil
                            engineer in the Public Works Department attached to
                            Matale, was started by Mr. Baden Powell. The idea of
                            ​​introducing the children's movement to the
                            indigenous children of Sri Lanka was born.Mr. Fancy
                            John Stevens founded Sri Lanka's first scout group
                            in 1912 at Matale Christudeva Vidyalaya. An engineer
                            in the public works department, Mr. A started
                            scouting in every province where he worked. Mr. F.
                            G. Stevens started the Scout Group of Christudeva
                            Vidyalaya, but he was not able to take charge of it.
                            For that, D., who was the brother of the then
                            Principal of Christudeva Vidyalaya, worked in the
                            same college. Assigned to Mr. Charles Jayasinghe.
                            Accordingly, Mr. Charles Jayasinghe will be the
                            first scout leader in Sri Lanka. B. P. By F. G.
                            After Mr. Stevens was appointed as the Colonial
                            Commissioner, in 1914, the British Boy Scout
                            Association Ceylon Branch was accepted as the Ceylon
                            Branch. <br />
                            <br />
                            In 1916, the first Wolf Pack of Sri Lanka, the 2nd
                            Galle Richmond College Pack, the Sea Scouts of Sri
                            Lanka started in Colombo in 1918, and the Manawaka
                            Scouts in 1920 belong to the Stevens era. .
                            Accordingly, a group of 50 Potaka Scouts was
                            established at the 2nd Galle Richmond College, which
                            was the brightest scout group at that time. At that
                            time, Richmond College Scout Dr. J. V. Mendis and
                            its support scout Dr. as well as Wolf Potaka Scout
                            Dr. S. C. Wickramaratne, assistant wolf pack scout
                            teachers T. U. De Silva and S. Messrs. Vijesuriya
                            did the work.
                        </p>
                        <div id="blogimage2">
                            <figure>
                                <img src={FGS} alt="" />
                                <figcaption>F.G. Stevens</figcaption>
                            </figure>
                            <figure>
                                <img src={BP} alt="" />
                                <figcaption>Loard Baden Powell</figcaption>
                            </figure>
                        </div>

                        <h2 class="topic-main">
                            ශ්‍රී ලංකාවේ බාලදක්ෂ ඉතිහාසය.
                        </h2>
                        <p className="blog2_para">
                            ලෝක බාල දක්‍ෂ ව්‍යාපාරය ආරම්භ වී වසර පහකට පසුව එනම්
                            1912 වසරේදී ලංකා බාල දක්‍ෂ ව්‍යාපාරය ආරම්භ විය.
                            ඉංග්‍රීසි ජාතික එෆ්.ජී.ස්ටීවන්ස් මහතාගේ
                            ප‍්‍රමුඛත්වයෙන් 1912 දී ලංකා බාලදක්‍ෂ කටයුතු මාතලේ
                            ක්‍රිස්තු දේව විද්‍යාලයෙන් ආරම්භ විය. ජුනි 02 දිනය
                            ශ්‍රී ලංකා බාලදක්ෂ ව්‍යාපාරයෙහි ආදිකතෘ දිනය ලෙස
                            සලකනු ලැබේ. 1915 වනවිට ආචාර්යවරුන්ද ඇතුළුව ලංකාව
                            පුරා බාලදක්‍ෂයන් ගණන 248කි.1907 දී එංගලන්තයේ ඇරඹි
                            බාලදක්ෂ ව්‍යාපාරය ඉන් වසර 5කට පසු, 1911 දී එවකට
                            මාතලේට අනියුක්ත ව ප්‍රසිද්ධ වැඩ දෙපාර්තමේන්තුවේ
                            (PWD) සිවිල් ඉංජිනේරුවෙකු ලෙස සේවය කළ ඉංගිරීසි ජාතික
                            ප්‍රැන්සිස් ජෝර්ජ් ස්ටීවන්ස් මහතාට බේඩ්න් පවල්
                            සාමිතුමා විසින් අරඹන ලද ළමා ව්‍යාපාරය ලංකාවේ
                            ස්වදේශික දරුවන් වෙත හදුන්වාදීමේ අදහස ඇති විය.
                            ෆැන්සිස් ජෝන් ස්ටීවන්ස් මහතා විසින් 1912 දී මාතලේ
                            ක්‍රිස්තුදේව විද්‍යාලයේදී ශ්‍රී ලංකාවේ මුල් ම
                            බාලදක්ෂ කණ්ඩායම ආරම්භ කරන ලදී. ප්‍රසිද්ධ වැඩ
                            දෙපාර්තමේන්තුවේ ඉංජිනේරුවරයකු වූ ඒ මහතා සේවය කළ සෑම
                            පළාතකම බාලදක්ෂ කටයුතු ආරම්භ කළේය. එෆ්.ජී.ස්ටීවන්ස්
                            මහතා විසින් ක්‍රිස්තුදේව විද්‍යාලයේ බාලදක්ෂ කණ්ඩායම
                            ආරම්භ කරනු ලැබූ ව ද එහි භාරකාරත්වය දැරීමට එතුමාට නො
                            හැකි විය. ඒ් සදහා ක්‍රිස්තුදේව විද්‍යාලයේ එවක
                            විදුහල්පතිතුමාගේ සොයුරු වූ එම විද්‍යාලයේ ම සේවය කල
                            ඩී. චාල්ස් ජයසිංහ මහතා වෙත පවරනු ලැබිණ. ඒ අනුව
                            ලංකාවේ ප්‍රථම බාලදක්ෂ නායකයා වනුයේ චාල්ස් ජයසිංහ
                            මහතා ය. බී. පී. තුමා විසින් එෆ්. ජී. ස්ටීවන්ස් මහතා
                            යටත්විජිත කොමසාරිස් ධුරයට පත්කරනු ලැබීමෙන් අනතුරු ව
                            1914දී බිතාන්‍ය බාලදක්ෂ සංගමයෙහි ලංකා ශාඛාව (British
                            Boy Scout Association Ceylon Branch) වශයෙන්
                            පිළිගැනීම සිදුවිය. <br />
                            <br />
                            1916 දී ලෝක බාලදක්ෂ ව්‍යාපාරයේ වෘක පෝතක අංශය ඇරඹුණ
                            දින දී ම ලංකාවේ ප්‍රථම වෘක පෝතක රැළ වන 2 වන ගාල්ල
                            රිච්මන්ඞ් විද්‍යාලයීය පෝතක රැළෙහි ආරම්භය ද 1918 දී
                            කොළඹ දී අරඹන ලද ලංකාවේ මුහුදු බාලදක්ෂ අංශය ද 1920 දී
                            අරඹන ලද මානවක බාලදක්ෂ අංශය ද ස්ටීවන්ස් යුගයට අයත්
                            වේ. ඒ අනුව එවකට දීප්තිමත් ම බාලදක්ෂ සමූහය වූ 2 වැනි
                            ගාල්ල රිච්මන්ඩ් විද්‍යාලයෙහි පෝතක බාලදක්ෂයන් 50
                            දෙනෙකුගෙන් යුත් රැළක් පිහිටවනු ලැබිණ. එවකට රිච්මන්ඩ්
                            විද්‍යාලයීය බාලදක්‍ෂ ආචාර්ය ඡේ. වී. මෙන්ඩිස්‌ සහ එහි
                            සහාය බාලදක්‍ෂ ආචාර්ය මෙන්ම වෘක පෝතක බාලදක්‍ෂ ආචාර්ය
                            එස්‌. සී. වික්‍රමරත්න, සහාය වෘක පෝතක බාලදක්‍ෂ
                            ආචාර්යවරුන් වූ ටී. යූ. ද සිල්වා සහ එස්‌. විඡේසූරිය
                            යන මහත්වරු කටයුතු කළහ.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img src={B1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScoutHistory;
