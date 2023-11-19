import React, { useEffect, useState } from "react";
import backIcon from "../../assets/talent/back.svg";
import JobPostCustomSelect from "../../components/JobPostCustomSelect";
import MultipleChoices from "../../components/MultipleChoices";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import LoaderPage1 from "../loaders/LoaderPage1";
import ErrorPage from "../loaders/ErrorPage";
import useAxiosPost from "../../hooks/useAxiosPost";
import useClearFormError from "../../hooks/useClearFormError";
import Spinners from "../loaders/Spinner";
import JobSubmissionModal from "./JobSubmissionModal";
import {AnimatePresence } from "framer-motion"
import AlertWithProgress from "../../components/AlertWithProgress";

const JobPoster = () => {
  const apiUrl = "https://techstudiocommunity.onrender.com";
  const initialFormData = {
    jobTitle: "",
    jobLocation: "",
    jobType: "",
    jobExperience: "",
    jobDescription: "",
    minimumQualification: "",
    responsibilities: "",
    payRange: "",
    takingApplicants: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  const [pay, setPay] = useState("");
  const [deadline, setDeadline] = useState("");
  const [dropDown, setDropDown] = useState({});
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [jobPosterData, setJobPosterData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [modal, setModal] = useState(false);
  const [alert,setAlert] = useState(false)
  const queryParams = new URLSearchParams(window.location.search);
  const emailParam = queryParams.get("email");
  const navigate = useNavigate();
  // All the custom hooks Used
  const { data, isLoading, fetchError } = useAxiosFetch(
    `${apiUrl}/api/jobs/dropdown/?email=${emailParam}`
  );
  const { triggerPost, response, isPosting, postError } = useAxiosPost();
  const jobPosterFetch = useAxiosFetch(`${apiUrl}/api/jobs/`);
  useClearFormError("selectedSkills", selectedSkills, setFormErrors);
  useClearFormError("selectedTools", selectedTools, setFormErrors);
  useClearFormError("pay", pay, setFormErrors);
  useClearFormError("experience", experience, setFormErrors);
  useClearFormError("jobType", jobType, setFormErrors);
  useClearFormError("deadline", deadline, setFormErrors);

  // Fetch the all the job posters from the backend and find the detail by the entered mail
  useEffect(() => {
    if (jobPosterFetch.data.length && !jobPosterFetch.fetchError) {
      const posterData = jobPosterFetch.data.find((poster) => {
        return poster.email == emailParam;
      });
      if (posterData) setJobPosterData(posterData);
      else navigate("/talent");
    }
  }, [jobPosterFetch.data]);

  // sets the dropdrow data for the entire form
  useEffect(() => {
    if (!emailParam) {
      navigate("/talent");
    } else {
      fetchError ?? setDropDown(data);
    }
  }, [data]);


  // set the modal with reference of the response after the posting of a job
  useEffect(() => {
    if (response && !postError) {
      setModal(true);
    }
    if (!response && postError) {
      setAlert(true)
    }
  }, [response, postError]);

  // checks if a object is empty or not
  const isEmpty = (obj) => {
    return Object.entries(obj).length === 0;
  };

  // handle form submit logic
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // checks if a posting is current in process to aviod mulitle post
    if (isPosting) {
      return;
    }
    // Form validation logic
    const errors = {};

    if (formData.jobTitle.trim() === "") {
      errors.jobTitle = "Please enter a job title.";
    }

    if (!selectedSkills.length) {
      errors.selectedSkills = "Please add a Skill";
    }

    if (selectedTools.length === 0) {
      errors.selectedTools = "Please add a Tool";
    }

    if (formData.jobLocation.trim() === "") {
      errors.jobLocation = "Please enter a job location.";
    }

    if (jobType.trim() === "") {
      errors.jobType = "Please select a job type.";
    }

    if (experience.trim() === "") {
      errors.experience =
        "Please select the minimum experience level requirement.";
    }

    if (formData.jobDescription.trim() === "") {
      errors.jobDescription = "Please enter a job description.";
    }

    if (formData.minimumQualification.trim() === "") {
      errors.minimumQualification = "Please enter the minimum qualification.";
    }

    if (formData.responsibilities.trim() === "") {
      errors.responsibilities = "Please enter responsibilities.";
    }

    if (pay.trim() === "") {
      errors.pay = "Please select a pay range.";
    }

    if (deadline.trim() === "") {
      errors.deadline = "Please select the application deadline.";
    }

    if (Object.keys(errors).length === 0) {
      var requestData = {
        title: formData.jobTitle,
        location: formData.jobLocation,
        deadline: deadline,
        jobposters: jobPosterData.id,
        skills: selectedSkills,
        tools: selectedTools,
        job_type: jobType,
        experience: experience,
        description: formData.jobDescription,
        qualification: formData.minimumQualification,
        responsibilities: formData.responsibilities,
        pays_range: pay,
      };

      triggerPost(requestData, `${apiUrl}/api/jobs/posts/`);
    } else {
      setFormErrors(errors);
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message for the field when it changes
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };
  

  return (
    <div>
      <AlertWithProgress
      alert = {alert}
      setAlert={setAlert}
      />
      <AnimatePresence>{isLoading && <LoaderPage1 />}</AnimatePresence>
      {fetchError && !isLoading && <ErrorPage message={fetchError} />}
      {!fetchError && !isLoading && (
        <div>
          <div className="page-width job-poster">
            <div className=" relative md:my-10">
              <h3 className="font-extrabold text-2xl md:text-3xl text-center text-customBlue-200">
                Job Requirement
              </h3>
              <div
                className="flex gap-2 bg-[#E3E3E3] absolute p-3 top-0 cursor-pointer"
                onClick={() => navigate("/talent")}
              >
                <img src={backIcon} alt="" />
                <p className="bg-[#E3E3E3] hidden md:block">CANCEL & GO BACK</p>
              </div>
            </div>

            <div className="bg-white shadow-xl">
              <div className=" bg-customBlue-100 h-[10px] rounded-t-md hidden md:block"></div>
              <div className=" md:max-w-[95%] lg:max-w-[85%] mx-auto mt-10">
                <form
                  action=""
                  className="flex flex-col md:gap-16 gap-5 mb-20"
                  onSubmit={handleFormSubmit}
                >
                  <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20">
                    <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                      <label htmlFor="jobtitle" className=" text-sm font-bold">
                        Job title
                      </label>
                      <input
                        type="text"
                        className={`${formErrors.jobTitle && "form-error"}`}
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleFieldChange}
                        id="jobtitle"
                        placeholder="Enter job title for this job post"
                      />
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                      <label
                        htmlFor="Joblocation"
                        className=" text-sm font-bold"
                      >
                        Job location
                      </label>
                      <input
                        type="text"
                        className={`${formErrors.jobLocation && "form-error"}`}
                        name="jobLocation"
                        value={formData.jobLocation}
                        onChange={handleFieldChange}
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
                      <JobPostCustomSelect
                        dropDownValue={jobType}
                        setDropDownValue={setJobType}
                        dropDownData={
                          !isEmpty(dropDown) ? dropDown.job_type : []
                        }
                        error={formErrors.jobType}
                        placeholder={"Select Job Type"}
                      />
                    </div>

                    <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                      <label className=" text-sm font-bold">
                        What level of experience do you want?
                      </label>
                      <JobPostCustomSelect
                        dropDownValue={experience}
                        setDropDownValue={setExperience}
                        dropDownData={
                          !isEmpty(dropDown) ? dropDown.job_experiences : []
                        }
                        error={formErrors.experience}
                        placeholder={
                          "Choose the minimum experience level required"
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 md:gap-4 w-full">
                    <label
                      htmlFor="Job Description"
                      className=" text-sm font-bold"
                    >
                      Job Description
                    </label>
                    <textarea
                      type="text"
                      className={`${formErrors.jobDescription && "form-error"}`}
                      name="jobDescription"
                      value={formData.jobDescription}
                      onChange={handleFieldChange}
                      id="Job Description"
                      placeholder="Enter the title of position you want to fill"
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:gap-4 w-full">
                    <label
                      htmlFor="Minimum Qualification"
                      className=" text-sm font-bold"
                    >
                      Minimum Qualification
                    </label>
                    <textarea
                      type="text"
                      className={`${
                        formErrors.minimumQualification && "form-error"
                      }`}
                      name="minimumQualification"
                      value={formData.minimumQualification}
                      onChange={handleFieldChange}
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
                        initialChoices={
                          !isEmpty(dropDown) ? dropDown.skills : []
                        }
                        setSelectedChoices={setSelectedSkills}
                        selectedChoices={selectedSkills}
                        className={`${
                          formErrors.selectedSkills && "form-error"
                        }`}
                      />
                    </div>

                    <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                      <label className=" text-sm font-bold truncate">
                        What skills or languages are you looking to hire?
                      </label>
                      <MultipleChoices
                        endpoint={"tools"}
                        placeholder={"Add new tool"}
                        initialChoices={
                          !isEmpty(dropDown) ? dropDown.tools : []
                        }
                        setSelectedChoices={setSelectedTools}
                        selectedChoices={selectedTools}
                        className={`${
                          formErrors.selectedTools && "form-error"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 md:gap-4 w-full">
                    <label
                      htmlFor="Responsibilities"
                      className=" text-sm font-bold"
                    >
                      Responsibilities
                    </label>
                    <textarea
                      type="text"
                      className={`${
                        formErrors.responsibilities && "form-error"
                      }`}
                      name="responsibilities"
                      value={formData.responsibilities}
                      onChange={handleFieldChange}
                      id="Responsibilities"
                      placeholder="Enter the list of responsibilities accompanying the position"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20 w-full">
                    <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                      <label className=" text-sm font-bold">
                        What is the pay range?
                      </label>
                      <JobPostCustomSelect
                        dropDownValue={pay}
                        setDropDownValue={setPay}
                        dropDownData={
                          !isEmpty(dropDown) ? dropDown.jobposts_pays : []
                        }
                        error={formErrors.pay}
                        placeholder={"Select Amount"}
                      />
                    </div>

                    <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 w-full">
                      <label className=" text-sm font-bold">
                        For how long will you be taking applicants?
                      </label>
                      <JobPostCustomSelect
                        dropDownValue={deadline}
                        setDropDownValue={setDeadline}
                        dropDownData={
                          !isEmpty(dropDown) ? dropDown.deadline_choices : []
                        }
                        placeholder={"Set application deadline"}
                        error={formErrors.deadline}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="bg-[#F9F9F9] py-3">
                <div className="md:max-w-[95%] lg:max-w-[85%] mx-auto flex md:justify-end gap-5 justify-center">
                  <button
                    onClick={() => navigate("/talent")}
                    className="border border-[#CE1126] px-10 py-2 rounded-md text-[#CE1126] font-semibold hover:bg-[#CE1126] hover:text-white transition"
                  >
                    CANCEL
                  </button>
                  <button
                    className="border bg-[#0266F4] px-10 py-2 rounded-md text-white font-semibold hover:bg-white hover:text-[#0266F4] hover:border border-[#0266F4] transition"
                    onClick={handleFormSubmit}
                  >
                    {isPosting ? <Spinners /> : "SUBMIT"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {modal && <JobSubmissionModal />}
        </div>
      )}
    </div>
  );
};

export default JobPoster;
