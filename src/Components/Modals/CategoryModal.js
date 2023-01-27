import React, { Fragment, useRef } from "react";
import MainModal from "./MainModal";
import { Input } from '../UserdInputs'
import { HiPlusCircle } from "react-icons/hi";
const CategoryModal = ({ modalOpen, setModalOpen, category }) => {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full border border-border bg-main text-white rounded-2xl">
        <h2 className="text-3xl font-bold">{category ? 'Update' : 'Create'}</h2>
        <form className="flex flex-col gap-6 text-left mt-6">
          <Input 
            label={'Category Name'}
            placeholder={category ? category.title : 'Actions'}
            type="text"
            bg={false}
          />
          <button className="w-full flex-rows gap-4 py-3 hover:bg-transparent hover:bg-main bg-subMain transitions border-2 border-subMain rounded"
              onClick={() => setModalOpen(!modalOpen)}>
            {
              category ? (
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

export default CategoryModal;
