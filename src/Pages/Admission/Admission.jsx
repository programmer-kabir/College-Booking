import React, { useEffect, useState } from "react";
import useCollege from "../../Component/Hooks/useCollege";
import Container from "../../Component/Container/Container";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { SelectedCollege } from "../../Component/Apis/SelectedCollege";
import useAuth from "../../Component/Hooks/useAuth";
Modal.setAppElement("#root");

const Admission = () => {
  const [colleges] = useCollege();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [Value, setValue] = useState(false)
  const {user} = useAuth()
  const [selectedCollege, setSelectedCollege] = useState(null);
  // console.log(user);
  const openModal = (college) => {
    setModalIsOpen(true);
    setValue(college);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      zIndex: 9999,
      Opacity: 10,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.0)",
      borderRadius: "8px",
      padding: "2rem",
      maxWidth: "800px",
      width: "100%",
    },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGUPLOADKEY
  }`;
  const onSubmit = (data) => {
    SelectedCollege(data, closeModal);
  
    
  };
  return (
    <Container>
      <div className="pt-20 grid md:grid-cols-3 gap-5 grid-cols-1 lg:grid-cols-4">
        {colleges.map((college) => (
          <div key={college._id}>
            <Link onClick={()=>openModal(college)}>
              <div className="h-[265px] border-pink-600 border-2 rounded-md">
                <div className="px-2 py-3 ">
                  <img
                    className="h-40 w-full rounded-md"
                    src={college.image}
                    alt=""
                  />
                  <h2 className="pt-2">
                    <span className="font-semibold"> College Name:</span>
                    {college.name}
                  </h2>
                </div>
              </div>
            </Link>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="flex justify-between pb-4">
                <h2 className="text-xl font-bold">Candidate Form</h2>
                {/* <h2>{selectedCollegeData ? selectedCollegeData.name : ""}</h2> */}
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-800"
                >
                  {/* <div className="bg-[#3A4256] p-1 rounded-full"> */}
                  <FaTimes className="w-5 h-5" />
                  {/* </div> */}
                </button>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate=""
                action=""
                className="space-y-6 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-4 grid grid-cols-2 items-center gap-5">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Candidate Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name Here"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter Your Subject Here"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                      {...register("subject", { required: true })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm">
                      Candidate Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue={user?.email}
                      readOnly
                      placeholder="Enter Your Email Here"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div>
                    <label htmlFor="code" className="block mb-2 text-sm">
                      Candidate Phone number
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      placeholder="Enter Your Phone Number"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                      {...register("number", { required: true })}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block mb-2 text-sm">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Your Address Here"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                      {...register("address", { required: true })}
                    />
                  </div>
                  <div>
                    <label htmlFor="code" className="block mb-2 text-sm">
                      Date of birth
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      placeholder="Date of Birth"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                      {...register("date", { required: true })}
                    />
                  </div>
                  <div>
                    {/*  */}
                    <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                      <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                        <div className="flex flex-col w-max mx-auto text-center">
                          <label>
                            <input
                              className="text-sm cursor-pointer w-36 hidden"
                              type="file"
                              name="image"
                              id="image"
                              accept="image/*"
                              hidden
                              {...register("image", { required: true })}
                            />
                            <h5 className="mb-2">Upload Your Photo</h5>
                            <img
                              className="mx-auto mb-2"
                              src="https://i.ibb.co/xC0Rw7j/gallery-1.png"
                              alt=""
                            />

                            <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                              Upload Image
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/*  */}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-rose-500 w-full rounded-md py-3 text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Admission;
