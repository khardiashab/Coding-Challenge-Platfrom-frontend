import { userState } from "@/atoms/userStateAtom";
import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import ConfirmDialog from "./ConfirmDialog";


const Logout: React.FC = () => {
  // const [signOut, loading, error] = useSignOut(auth);
  const setUserState = useSetRecoilState(userState);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    // Logout logic here
	// Todo Add process tostify for when it hanlde backend logic and after the success use succsess toast if error happen use error toast.
    console.log("Logged out!");
    setUserState(null);
    // FIXME ADD TOKEN RELATED FUNCTIONALITY LIKE DELTE THE TOKEN FROM SERVER. TO LOGOUT
    setUserState(null);

    toast.success("SUCCESSFULLY LOGOUT.", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });
  };

  //
  return (
    <>
      <button
        className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange"
        onClick={handleLogout}
      >
        <FiLogOut />
      </button>

      <ConfirmDialog
        isOpen={isOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        heading="Are you sure you want to logout?"
        description="You will be logged out of the application."
      />
    </>
  );
};

export default Logout;
