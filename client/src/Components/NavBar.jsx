import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import { useLocation } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="d-flex w-100 p-3 justify-content-center ">

            {/* <div className=""> */}

                <div className="">
                    <h2 className="font-bold text-2xl">
                        <StarBorderPurple500Icon />
                        {
                            "Explore RideEase: The Convenient Cab Booking App"
                        }
                        <StarBorderPurple500Icon />
                    </h2>
                </div>
            
            {/* </div> */}
    {/* 
                <div className="">
                            <img
                                src="https://as2.ftcdn.net/v2/jpg/02/72/89/23/500_F_272892343_x1hDsOtr6SOvi8i3ik6wHBSko5bIh9FU.jpg"
                                alt="Twitter Logo"
                                width={"100%"}
                                height={"100%"}
                                className="ml-8"
                            />
                        </div> */}

            {/* <div className="">
                     <SearchIcon className="absolute m-2" />
                     <input type="text" className="bg-blue-100 rounded-full py-2 px-8" />
                 </div> */}
        </div>
    );
};

export default NavBar;
