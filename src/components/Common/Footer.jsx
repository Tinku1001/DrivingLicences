import React from "react";

const BottomFooter = [{ "id": "Instagram", "link": "https://www.instagram.com/its__aman10/" }, { "id": "Linkedin", "link": "https://www.linkedin.com/in/aman-singh-29055223b/" }, { "id": "Github", "link": "https://github.com/Aman-s12345/" }];
const Footer = () => {
  return (
    <div className="bg-richblack-800 h-20 flex justify-center items-center">
      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    } px-3 `}
                >
                  <a
                    href={ele.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                      <p>{ele.id}</p>
                    </div>

                  </a>

                </div>
              );
            })}
          </div>

          <div className="text-center">Made with  Aman Singh © 2024</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
