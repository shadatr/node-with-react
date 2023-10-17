import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import chat from "../images/chat.png";
import consulation from "../images/consultation.png";
import easy from "../images/easy.png";
import support from "../images/support.png";


const data = [
  {
    text: "Seamless Connections: Reach out to your audience effortlessly. Our platform allows you to import a collection of email addresses, ensuring that your surveys reach the right inboxes.",
    icon: chat,
  },
  {
    text: "Customized Surveys: Tailor your surveys to fit your objectives. Create captivating and interactive questionnaires that reflect your brand's identity.",
    icon: easy,
  },
  {
    text: "In-Depth Analytics: Gain access to in-depth survey analytics, including response rates, time to completion, and more. Uncover the trends and patterns hidden within your survey results.",
    icon: consulation,
  },
  {
    text: "Scalable Solutions: Whether you're sending surveys to a handful of contacts or a massive email list, our platform can handle the scale you need.",
    icon: support,
  },
];

const Landing = () => {
  return (
    <div >
      <div className="bg h-screen">
        <Header />
        <div className="flex justify-center items-center w-[100%] py-20 ">
          <div className="flex flex-col justify-center items-center text-center w-[800px] text-secondary">
            <h1 className="text-[50px] p-8">
              Unlock Insights, Drive Success Power Your Email Marketing with
              Valuable Answers!"
            </h1>
            <p className="text-[20px]">
              Unlock the Power of Insights with Our Email Marketing Surveys!
            </p>
            <Link
              to="/google/auth"
              className="text-[18px] hover:text-[19px] text-primary py-2 px-4 bg-secondary rounded-[40px] m-10 "
            >
              Start for free{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[100%] h-screen text-[18px] font-bold" id="about">
        <span className=" flex mt-[-40px]">
        <h1 className="w-[600px] flex items-center">Unlock the Power of Data with Our Email Marketing Survey Platform!</h1>
        <h1 className="w-[600px]">Are you seeking a comprehensive solution to harness the collective wisdom of your selected audience? Look no further! Our cutting-edge email marketing survey platform is designed to empower you to connect, collect, and conquer insights from your chosen recipients.</h1>
        </span>
        <div className="flex">
        {data.map((item, index) => (
          <span
            className={`border border-blue1 p-6 w-[250px] text-center m-8 rounded-[40px] ${index===2? "bg-blue2":''} `}
            key={index}
          >
            <span className="items-center justify-center flex w-full">
            <img src={item.icon} width={100} alt="icon" ></img>
            </span>
            <h1 className="py-5">{item.text}</h1>
          </span>
        ))}
        </div>
        
      </div>

    </div>
  );
};

export default Landing;
