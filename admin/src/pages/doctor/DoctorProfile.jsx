import React, { use, useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";

const DoctorProfile = () => {
  const { profileData, setProfileData,backendUrl, getProfileData, dToken } =
    useContext(DoctorContext);

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);
  return <div></div>;
};

export default DoctorProfile;
