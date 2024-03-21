import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Input, Heading } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1110px]">
        <Heading as="h3">Settings</Heading>
        <div className="flex flex-row sm:flex-col justify-between items-center w-auto sm:gap-10">
          <Input
            color="gray_100_03"
            name="search"
            placeholder="Search "
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e)}
            prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} fillColor="#888ea2ff" />
              ) : null
            }
            className="w-[50%] sm:w-full gap-[15px] text-blue_gray-400 rounded-[25px]"
          />
          <Button shape="circle" className="w-[50px]">
            <Img src="images/img_settings_1.svg" />
          </Button>
          <Button shape="circle" className="w-[50px]">
            <Img src="images/img_002_notification_1.svg" />
          </Button>
          <Img src="images/img_woman_1.png" alt="circleimage" className="h-[60px] w-[60px] md:h-auto rounded-[50%]" />
        </div>
      </div>
    </header>
  );
}
