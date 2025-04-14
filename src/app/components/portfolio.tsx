import "./portfolio.css";
import Link from "next/link";
import agency from "../../../public/alis.jpg";
import pro1 from "../../../public/pro1.jpg";
import pro2 from "../../../public/pro2.jpg";
import eco from "../../../public/e-commer1.jpg";
import blog from "../../../public/blog1.jpg";

import e from "../../../public/e-.jpg";
import cof from "../../../public/cof.jpg";
import onlinehtoh from "../../../public/onlinehtoh.png";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="main-text">
        <span>What I will do for you</span>
        <h3>My Latest Projects</h3>
      </div>
      <div className="portfolio-gallery">
        <div className="port-box">
          <div className="port-img">
            <Image src={agency} alt="Agency Project" width={500} height={600} />
          </div>
          <div className="port-content">
            <h3> Full Stack Developer</h3>
            <p>
            Alishba Rehman  Portfolio
            </p>
            <Link href="https://alishbarehmanportfolio2customcss.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>










        <div className="port-box">
          <div className="port-img">
            <Image src={pro1} alt="Agency Project" width={500} height={600} />
          </div>
          <div className="port-content">
            <h3> Men stack developer </h3>
            <p>
          Alishba 
            </p>
              <FaExternalLinkAlt />
            <Link href="https://bella-ciao-website.vercel.app">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>


        <div className="port-box">
          <div className="port-img">
            <Image
              src={pro2}
              alt="Alishba's Portfolio Project"
              width={500}
              height={700}
            />
          </div>
          <div className="port-content">
            <h3>Mean Stack developer </h3>
            <p>
              Alishba
            </p>
            <Link href="https://foodwebsite-opal.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>

       



        <div className="port-box">
          <div className="port-img">
            <Image
              src={onlinehtoh}
              alt="Alishba's Portfolio Project"
              width={500}
              height={700}
            />
          </div>
          <div className="port-content">
            <h3>Mean Stack developer </h3>
            <p>
              Alishba Rehman  Project
            </p>
            <Link href="https://reactwebsite-black-agency.netlify.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>






        <div className="port-box">
          <div className="port-img">
            <Image
              src={eco}
              alt="Alishba's Portfolio Project"
              width={500}
              height={700}
            />
          </div>
          <div className="port-content">
            <h3>Mean Stack developer </h3>
            <p>
            E-commerce  Project
            </p>
            <Link href="https://online-store-website-full.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>





        <div className="port-box">
          <div className="port-img">
            <Image
              src={blog}
              alt="Alishba's Portfolio Project"
              width={500}
              height={700}
            />
          </div>
          <div className="port-content">
            <h3>Mean Stack developer </h3>
            <p>
             Blog Project
            </p>
            <Link href="https://blogswebsitemilestone03-issz.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>









        <div className="port-box">
          <div className="port-img">
            <Image
              src={e}
              alt="Alishba's Portfolio Project"
              width={500}
              height={700}
            />
          </div>
          <div className="port-content">
            <h3>Mean Stack developer </h3>
            <p>
              E-Commer Project
            </p>
            <Link href="https://e-commercehackhathonq2-1mxf.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>







        <div className="port-box">
          <div className="port-img">
            <Image
              src={cof}
              alt="Coffee Project"
              width={500}
              height={400}
            />
          </div>
          <div className="port-content">
            <h3>Mean Stack developer</h3>
            <p>
          coffee  Project
            </p>
            <Link href="https://web-coffee-website.netlify.app">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
