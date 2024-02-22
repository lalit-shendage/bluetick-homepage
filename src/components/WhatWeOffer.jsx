import React from "react";
import "../styles/WhatWeOffer.css";

const WhatWeOffer = () => {
  const data = [
    {
      image: "https://wp-uploads.yalantis.com/wp-content/uploads/2023/12/13100814/person-using-ai-tool-job-1-scaled.webp",
      title: "Explore AI Opportunities for Your Enterprise",
      content:
        "Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.",
    },
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/600b425db7d369a10dfa14df//960x0.jpg?height=474&width=711&fit=bounds",
      title: "Design AI Trust Layer ",
      content:
        "Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational andcustomer data.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4_iDgdulwI2iP4KQG9WQArC0RUbzrTIBr0wLsoLtURFfUkqbI3Fy6G-pPnsnfAj3M4Y&usqp=CAU",
      title: "Scalability-Focused Solutions",
      content:
        "Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity. ",
    },
    {
      image:
        "https://www.labellerr.com/blog/content/images/2023/03/workflow-automation.webp",
      title: "End to end Workflow automation",
      content:
        "Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.",
    },
  ];
  return (
    <div className="containerWwo">
      <h2>What We Offer...</h2>
      {data.map((item, index) => (
        <div key={index} className={`perk ${index % 2 === 0 ? "even" : "odd"}`}>
          <img
            src={item.image}
            alt={`Benefit ${index + 1}`}
            className="perk-image"
          />
          <div className="perk-content">
            <h4>{item.title}</h4>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatWeOffer;
