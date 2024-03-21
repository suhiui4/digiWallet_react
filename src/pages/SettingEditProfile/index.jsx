import React from "react";
import { useState,useMemo } from "react";
import { Helmet } from "react-helmet";
import countryList from 'react-select-country-list'
import { Button, Input, Text, Img, SelectBox } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";



export default function SettingEditProfilePage() {


  const [value, setValue] = useState([]);
  const options = useMemo(()=>countryList().getData(),[])


  const changeHandler = (value)=>{
     setValue(value);
  };
  return (
    <>
      <Helmet>
        <title>DigiWallet</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5 bg-gray-100">
        <Sidebar1 className="w-[252px] h-screen top-0 bg-white-A700 !sticky overflow-auto" />
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[31px]">
          <Header className="flex justify-center items-center w-full sm:w-full pt-5 pb-[19px] px-5 border-gray-300 border-b border-solid bg-white-A700" />
          <div className="flex flex-row justify-center w-[94%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[51px] p-[30px] sm:p-5 bg-white-A700 rounded-[25px]">
              <div className="flex flex-col items-start justify-start w-full mt-1.5">
                <div className="flex flex-row sm:flex-col justify-start items-start w-[39%] md:w-full sm:gap-5 z-[1]">
                  <div className="flex flex-col items-center justify-start w-[29%] sm:w-full gap-2">
                    <Text as="p" className="!text-indigo-600_01 !font-medium">
                      Edit Profile
                    </Text>
                    <div className="h-[3px] w-full rounded-tl-[10px] rounded-tr-[10px] bg-indigo-600_01" />
                  </div>
                </div>
                <div className="h-px w-full mt-[-1px] bg-gray-300" />
              </div>
              <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                <div className="flex flex-row justify-center w-[13%] md:w-full mt-[3px] md:mt-0">
                  <div className="flex flex-row justify-center items-center w-full">
                    <Img
                      src="images/img_woman_28.png"
                      alt="circleimage_one"
                      className="h-[130px] w-[130px] md:h-auto rounded-[50%]"
                    />
                    <Button color="indigo_600_01" size="sm" shape="circle" className="w-[30px] ml-[-28px]">
                      <Img src="images/img_group_194.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start w-[83%] md:w-full">
                  <div className="flex flex-row md:flex-col justify-start w-full gap-[29px] md:gap-5">
                
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Full Name</Text>
                      <Input
                        shape="round"
                        name="name"
                        placeholder="John Doe"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">User Name</Text>
                      <Input
                        shape="round"
                        name="userName"
                        placeholder="JohnDoe007"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Email</Text>
                      <Input
                        type="email"
                        shape="round"
                        name="email"
                        placeholder="johndoe007@gmail.com"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Password</Text>
                      <Input
                        shape="round"
                        type="password"
                        name="password"
                        placeholder="**********"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Date of Birth</Text>
                      <Input
                       shape="round"
                       type='date'
                        placeholder='Enter BirthDate'
                        name='birthdate'
                        className="w-full sm:w-full border-gray-300 border border-solid"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-[9px]">
                      <Text as="p">Country</Text>
                      <SelectBox
                        shape="round"
                        name="country"
                        options={options}
                        value={value}
                        placeholder="USA"
                        onChange={changeHandler}
                        className="w-full gap-px border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Address</Text>
                      <Input
                        shape="round"
                        name="address"
                        placeholder="San Jose, California, USA"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-[9px]">
                      <Text as="p">City</Text>
                      <Input
                        shape="round"
                        name="city"
                        placeholder="San Jose"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p">Postal Code</Text>
                      <Input
                        shape="round"
                        name="zipcode"
                        placeholder="45962"
                        className="w-full sm:w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <Button
                    color="indigo_600_01"
                    size="lg"
                    className="mt-[30px] sm:px-5 font-medium min-w-[190px] rounded-[15px] sm:min-w-full"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
