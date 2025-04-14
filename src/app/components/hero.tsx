"use client";
import { useEffect } from "react";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import example from "../../../public/aaa.png";
import "./hero.css";
const Hero = () => {
  const whatsappNumber = "923320405516"; // Define the whatsappNumber variable
  useEffect(() => {
    const words: NodeListOf<HTMLElement> = document.querySelectorAll(".word");
    words.forEach((word) => {
      const letters: string[] = word.textContent?.split("") || [];
      word.textContent = "";
      letters.forEach((letter) => {
        const span: HTMLElement = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let currentWordIndex: number = 0;
    const maxWordIndex: number = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    const changerText = (): void => {
      const currentWord: HTMLElement = words[currentWordIndex];
      const nextWord: HTMLElement =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1];

      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          (letter as HTMLElement).className = "letter out";
        }, i * 80);
      });

      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        (letter as HTMLElement).className = "letter behind";
        setTimeout(() => {
          (letter as HTMLElement).className = "letter in";
        }, 340 + i * 80);
      });

      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    changerText();
    const interval = setInterval(changerText, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section id="home" className="home">
        <div className="home-content">
          <h1>Hi! I am ALISHBA REHMAN</h1>
          <div className="change-text">
            <h3>and i&apos;am </h3>
            <h3>
            
              <span className="word">&nbsp; website&nbsp; creater</span>{" "}
              <span className="word">&nbsp; Mean Stack&nbsp;developer</span>
              <span className="word"> &nbsp;Full Stack&nbsp;developer</span>
              <span className="word">&nbsp; ui/ux&nbsp; developer</span>
              <span className="word">&nbsp; web&nbsp; developer</span>
            </h3>
          </div>
          <div className="p4">
          <p>
            I am a web developer, creating responsive and user-friendly websites
            using modern technologies.
          </p></div>
          <div className="info-box">
          <div className="emai-info">
          <h5>Email:</h5>
<a href="alishbarehman526@gmail.com">
alishbarehman526@gmail.com</a>
</div>
          
          </div>

          <br />        
          <br />
          <div className="btn-box">
          <a
              href={`https://wa.me/${whatsappNumber}`}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp Num
            </a>
            <a     className="btn"
href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAElt-K8Br21Cu7d924LEsj2IHF4yC89iA4k&keywords=abdul%20basit%20mujeeb&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=51e3504f-a9d3-41e0-96a0-">             
            
              Hire Me Now!
            </a>
          </div>

          <div className="social-icons ">
            <a href="https://www.facebook.com/share/14w5g2AL4Z/">
              <FaFacebookSquare />
            </a>
            <a href="https://www.linkedin.com/in/alishba-rehman-29074821a/">
              <FaLinkedin />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="image-box">
            <Image src={example} alt="alishba" height={190} width={380} />
          </div>
          <div className="liquid-shape">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              id="blobSvg"
            >
              <path
                id="blob"
                d="M409,345Q402,440,302.5,448.5Q203,457,150,390.5Q97,324,94,249Q91,174,148,112.5Q205,51,304,55Q403,59,409.5,154.5Q416,250,409,345Z"
                fill="#12f7ff"
              >
                <animate
                  attributeName="d"
                  dur="10000ms"
                  repeatCount="indefinite"
                  values="
                  M434,277Q390,304,380.5,332Q371,360,360,404.5Q349,449,309,451.5Q269,454,229.5,457.5Q190,461,168.5,424Q147,387,103,377.5Q59,368,50.5,328.5Q42,289,56,252.5Q70,216,69,176.5Q68,137,98.5,113.5Q129,90,163,77.5Q197,65,232.5,59Q268,53,313.5,42Q359,31,389,63.5Q419,96,439,132.5Q459,169,468.5,209.5Q478,250,434,277Z
                  
                  M442,282Q416,314,406,348.5Q396,383,370.5,411.5Q345,440,308,456Q271,472,230.5,466.5Q190,461,150,448Q110,435,96.5,394.5Q83,354,75.5,319Q68,284,60.5,248.5Q53,213,65,178Q77,143,98,109.5Q119,76,152,48.5Q185,21,225.5,47Q266,73,309,59.5Q352,46,387,69.5Q422,93,448.5,128Q475,163,471.5,206.5Q468,250,442,282Z
                          M398.5,277.5Q421,305,420.5,339.5Q420,374,404.5,408Q389,442,343,418Q297,394,273.5,439.5Q250,485,217,469Q184,453,160,430Q136,407,97,398.5Q58,390,51.5,353.5Q45,317,51,283.5Q57,250,49,216Q41,182,83,170.5Q125,159,123,116Q121,73,164,95.5Q207,118,228.5,93.5Q250,69,279,69.5Q308,70,318,106.5Q328,143,388,124.5Q448,106,467,139.5Q486,173,431,211.5Q376,250,398.5,277.5Z
                          M422,346Q403,442,309.5,420.5Q216,399,149.5,365Q83,331,92.5,255Q102,179,159.5,142Q217,105,297,97.5Q377,90,409,170Q441,250,422,346Z;
                          M385,311Q348,372,276.5,409.5Q205,447,159.5,381Q114,315,70.5,228.5Q27,142,114.5,90.5Q202,39,276,82Q350,125,386,187.5Q422,250,385,311Z;
                          M378,307Q341,364,268,427Q195,490,156.5,402Q118,314,100,241.5Q82,169,148.5,132.5Q215,96,302,86Q389,76,402,163Q415,250,378,307Z;
                          M449.5,297Q445,344,389.5,350Q334,356,308.5,376.5Q283,397,240.5,437Q198,477,176.5,423Q155,369,123.5,347.5Q92,326,47,288Q2,250,62.5,219.5Q123,189,116,131Q109,73,155.5,55.5Q202,38,246,56.5Q290,75,328,90Q366,105,412,127.5Q458,150,456,200Q454,250,449.5,297Z;                       
                        M468,287Q479,324,449.5,348.5Q420,373,403.5,405.5Q387,438,338,403.5Q289,369,269.5,425Q250,481,213,478.5Q176,476,163.5,431.5Q151,387,106.5,387Q62,387,52.5,352Q43,317,66,283.5Q89,250,78,220.5Q67,191,85,167Q103,143,110,105Q117,67,160,86.5Q203,106,226.5,76Q250,46,287.5,32Q325,18,358,37Q391,56,389,103Q387,150,387,178Q387,206,422,228Q457,250,468,287Z
"                ></animate>
              </path>
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
