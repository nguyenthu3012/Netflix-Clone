import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Input, Message, Select } from "../../../Components/UserdInputs";
import Uploader from "../../../Components/Uploader";
import logo from '../../../assets/image/logo.png'
import { CategoriesData } from "../../../Data/Categories";
import { UsersData } from "../../../Data/UsersData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastsModal from "../../../Components/Modals/CastsModal";

const AddMovie = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [cast, setCast] = useState(null)

  useEffect(() => {
    if (modalOpen === false) {
      setCast()
    }
  }, [modalOpen])

  return (
    <Sidebar>
      <CastsModal modalOpen={modalOpen} setModalOpen={setModalOpen} cast={cast} />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Create Movie</h2>
        <div className="w-full md:grid-cols-2 gap-6">
          <Input
            label="Movie Title"
            placeholder="Game of Thrones"
            type="text"
            bg={true}
          />
          <Input
            label="Hours"
            placeholder="2hr"
            type="text"
            bg={true}
          />
        </div>

        <div className="w-full md:grid-cols-2 gap-6">
          <Input
            label="Language Used"
            placeholder="English"
            type="text"
            bg={true}
          />
          <Input
            label="Year of Release"
            placeholder="2022"
            type="number"
            bg={true}
          />
        </div>
        {/* images  */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* image without title  */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image without Title
            </p>
            <Uploader />
            <div className="w-32 h-32 bg-main border-border rounded">
              <img src={logo} alt="logo" className="w-full h-full object-cover rounded" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image without Title
            </p>
            <Uploader />
            <div className="w-32 h-32 bg-main border-border rounded">
              <img src={logo} alt="logo" className="w-full h-full object-cover rounded" />
            </div>
          </div>
        </div>
        {/* Description  */}
        <Message label={'Description'} placeholder='Make it short and sweet' />
        {/* Categories  */}
        <div className="text-sm w-full">
          <Select label={'Movie Category'} options={CategoriesData} />
        </div>
        {/* Movie Video  */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-border font-semibold text-sm">
            Movie Video
          </label>
          <Uploader />
        </div>
        {/* CASTS  */}
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
          <button onClick={() => {
            setModalOpen(!modalOpen)
          }} className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded">
            Add Cast
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
            {UsersData.map((user, index) => (
              <div key={index} className='p-2 italic text-xs text-text rounded flex-colo bg-main border border-border'>
                <img src={user.image ? user.image : logo} alt="cast" className="w-full h-28 object-cover rounded mb-4" />
                <p>{user.name}</p>
                <div className="flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 flex-colo bg-main border border-border text-subMain rounded">
                    <MdDelete />
                  </button>
                  <button onClick={() => {
                    setCast(user)
                    setModalOpen(!modalOpen)
                  }} className="w-6 h-6 flex-colo bg-main border border-border text-green-600 rounded">
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-subMain font-medium transitions hover:bg-dry border border-subMain w-full flex-rows gap-6 text-white py-4 rounded">
          <ImUpload /> Publish Movie
        </button>
      </div>
    </Sidebar>
  );
};

export default AddMovie;