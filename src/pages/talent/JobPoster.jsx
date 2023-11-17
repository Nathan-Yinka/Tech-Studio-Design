import React, { useEffect, useState } from "react";
import backIcon from "../../assets/talent/back.svg";
import JobPostCustomSelect from "../../components/JobPostCustomSelect";
import MultipleChoices from "../../components/MultipleChoices";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import LoaderPage1 from "../loaders/LoaderPage1";
import ErrorPage from "../loaders/ErrorPage";

const JobPoster = () => {
    const apiUrl = "https://techstudiocommunity.onrender.com";
    const [jobType,setJobType] = useState("")
    const [experience,setExperience] = useState("")
    const [pay,setPay] = useState("")
    const [deadline,setDeadline] = useState("")
    const [dropDown, setDropDown] = useState({});
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedTools, setSelectedTools] = useState([]);
    const queryParams = new URLSearchParams(window.location.search);
    const emailParam = queryParams.get('email');
    const navigate = useNavigate();

    const { data, isLoading, fetchError } = useAxiosFetch(`${apiUrl}/api/jobs/dropdown/?email=${emailParam}`);
    useEffect(() => {
        if (!emailParam) {
          navigate("/talent");
        }
        else{
            fetchError ?? setDropDown(data)
        }
      }, [data,emailParam]);

    const isEmpty = (obj) => {
        return Object.entries(obj).length === 0;
        };

  return (
    <div>
        {isLoading && <LoaderPage1/>}
        {fetchError && !isLoading && <ErrorPage message={fetchError}/>}
        {!fetchError && !isLoading &&(
    <div className="page-width job-poster">
      <div className=" relative md:my-10">
        <h3 className="font-extrabold text-2xl md:text-3xl text-center text-customBlue-200">
          Job Requirement
        </h3>
        <div className="flex gap-2 bg-[#E3E3E3] absolute p-3 top-0 cursor-pointer" onClick={()=>navigate("/talent")}>
          <img src={backIcon} alt="" />
          <p className="bg-[#E3E3E3] hidden md:block">CANCEL & GO BACK</p>
        </div>
      </div>

      <div className="bg-white shadow-xl">
        <div className=" bg-customBlue-100 h-[10px] rounded-t-md hidden md:block"></div>
        <div className=" md:max-w-[95%] lg:max-w-[85%] mx-auto mt-10">
          <form action="" className="flex flex-col md:gap-16 gap-5 mb-20">
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20">
              <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                <label htmlFor="jobtitle" className=" text-sm font-bold">
                Job title
                </label>
                <input
                  type="text"
                  className=""
                  id="jobtitle"
                  placeholder="Enter job title for this job post"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                <label htmlFor="Joblocation" className=" text-sm font-bold">
                Job location
                </label>
                <input
                  type="text"
                  className=""
                  id="Joblocation"
                  placeholder="Enter job location for this job post"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20 w-full">
              <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                <label className=" text-sm font-bold">
                What position type are you offering?
                </label>
                <JobPostCustomSelect dropDownValue={jobType} setDropDownValue={setJobType} dropDownData={!isEmpty(dropDown)?dropDown.job_type:[]} className={""} placeholder ={"Select Job Type"}/>
              </div>

              <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                <label className=" text-sm font-bold">
                What level of experience do you want?
                </label>
                <JobPostCustomSelect dropDownValue={experience} setDropDownValue={setExperience} dropDownData={!isEmpty(dropDown)?dropDown.job_experiences:[]} className={""} placeholder={"Choose the minimum experience level required"}/>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-4 w-full">
                <label htmlFor="Job Description" className=" text-sm font-bold">
                Job Description
                </label>
                <textarea
                  type="text"
                  className=""
                  id="Job Description"
                  placeholder="Enter the title of position you want to fill"
                />
              </div>

            <div className="flex flex-col gap-2 md:gap-4 w-full">
                <label htmlFor="Minimum Qualification" className=" text-sm font-bold">
                Minimum Qualification
                </label>
                <textarea
                  type="text"
                  className=""
                  id="Minimum Qualification"
                  placeholder="Enter the minimum level of qualification for the position you are hiring for "
                />
              </div>

              <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20">
              <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                <label className=" text-sm font-bold truncate">
                What skills or languages are you looking to hire?
                </label>
                <MultipleChoices 
                endpoint={"skills"}
                placeholder={"Add new skill"}
                initialChoices={!isEmpty(dropDown)?dropDown.skills:[]}
                setSelectedChoices={setSelectedSkills}
                selectedChoices={selectedSkills}
                />
              </div>

              <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                <label className=" text-sm font-bold truncate">
                What skills or languages are you looking to hire?
                </label>
                <MultipleChoices 
                endpoint={"tools"}
                placeholder={"Add new tool"}
                initialChoices={!isEmpty(dropDown)?dropDown.tools:[]}
                setSelectedChoices={setSelectedTools}
                selectedChoices={selectedTools}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-4 w-full">
                <label htmlFor="Responsibilities" className=" text-sm font-bold">
                Responsibilities
                </label>
                <textarea
                  type="text"
                  className=""
                  id="Responsibilities"
                  placeholder="Enter the list of responsibilities accompanying the position"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20 w-full">
              <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                <label className=" text-sm font-bold">
                What is the pay range?
                </label>
                <JobPostCustomSelect dropDownValue={pay} setDropDownValue={setPay} dropDownData={!isEmpty(dropDown)?dropDown.jobposts_pays:[]} className={""} placeholder ={"Select Amount"}/>
              </div>

              <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                <label className=" text-sm font-bold">
                For how long will you be taking applicants?
                </label>
                <JobPostCustomSelect dropDownValue={deadline} setDropDownValue={setDeadline} dropDownData={!isEmpty(dropDown)?dropDown.deadline_choices:[]} className={""} placeholder={"Set application deadline"}/>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-[#F9F9F9] py-3">
            <div className="md:max-w-[95%] lg:max-w-[85%] mx-auto flex md:justify-end gap-5 justify-center">
                    <button className="border border-[#CE1126] px-10 py-2 rounded-md text-[#CE1126] font-semibold hover:bg-[#CE1126] hover:text-white transition">CANCEL</button>
                    <button className="border bg-[#0266F4] px-10 py-2 rounded-md text-white font-semibold hover:bg-white hover:text-[#0266F4] hover:border border-[#0266F4] transition">SUBMIT</button>
            </div>
          </div>
      </div>
    </div>
    )}
    </div>
  );
};

export default JobPoster;
