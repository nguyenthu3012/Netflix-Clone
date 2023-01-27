import logo from '../../assets/image/logo.png'
import React, { Fragment, useRef } from "react";
import MainModal from "./MainModal";
import { Input } from '../UserdInputs'
import { HiPlusCircle } from "react-icons/hi";
import Uploader from '../Uploader';
const CastsModal = ({ modalOpen, setModalOpen, cast }) => {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full border border-border bg-main text-white rounded-2xl">
        <h2 className="text-3xl font-bold">{cast ? 'Update Cast' : 'Create Cast'}</h2>
        <form className="flex flex-col gap-6 text-left mt-6">
          <Input 
            label={'Category Name'}
            placeholder={cast ? cast.title : 'Minh Thu'}
            type="text"
            bg={false}
          />
          <div className='flex flex-col gap-2'>
            <p className='text-border font-semibold text-sm'>
                Cast Image
            </p>
            <Uploader />
            <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                <img src={cast ? cast.image : logo} alt={cast?.name} className='w-full h-full object-cover rounded' />
            </div>
          </div>
          <button className="w-full flex-rows gap-4 py-3 hover:bg-transparent hover:bg-main bg-subMain transitions border-2 border-subMain rounded"
              onClick={() => setModalOpen(!modalOpen)}>
            {
              cast ? (
                'Update'
              ) : (
                <>
                  <HiPlusCircle /> Add
                </>
              )
            }
          </button>
        </form>
      </div>
    </MainModal>
  );
};

export default CastsModal;