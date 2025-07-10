import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fee, setFee] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!docImg) {
        return toast.error("image not selected");
      }
      const formdata = new FormData();

      formdata.append("image", docImg);
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("experience", experience);
      formdata.append("fee", Number(fee));
      formdata.append("about", about);
      formdata.append("speciality", speciality);
      formdata.append("degree", degree);
      formdata.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );
      // console lof formdata
      formdata.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formdata,
        {
          headers: { aToken },
        }
      );
      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        form.reset();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll ">
        <div className="flex items-center gap-4 mb-8 text-gray-300">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col items-start gap-10 text-gray-600">
          <div className="w-full flex flex-col lg:flex-row gap-2">
            <div className="flex flex-1 flex-col gap-1">
              <p className="mt-4 mb-2">Doctor name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border rounded py-2 px-3"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="mt-4 mb-2">Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded py-2 px-3"
                type="email"
                placeholder="Doctor email"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="mt-4 mb-2">Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border rounded py-2 px-3"
                type="password"
                placeholder="Doctor password"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="mt-4 mb-2">Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="flex flex-1 flex-col gap-1 border rounded py-2 px-3"
                name=""
                id=""
              >
                <option value="1 Year"> 1 Year</option>
                <option value="2 Year"> 2 Year</option>
                <option value="3 Year"> 3 Year</option>
                <option value="4 Year"> 4 Year</option>
                <option value="5 Year"> 5 Year</option>
                <option value="6 Year"> 6 Year</option>
                <option value="7 Year"> 7 Year</option>
                <option value="8 Year"> 8 Year</option>
                <option value="9 Year"> 9 Year</option>
                <option value="10 Year"> 10 Year</option>
              </select>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="mt-4 mb-2">Fees</p>
              <input
                onChange={(e) => setFee(e.target.value)}
                value={fee}
                className="border rounded py-2 px-3"
                type="number"
                placeholder="fees"
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:flex-1 flex flex-col gap-4 mt-3">
          <div className="flex flex-1 flex-col gap-1">
            <p className="mt-4 mb-2">Specialty</p>
            <select
              onChange={(e) => setSpeciality(e.target.value)}
              value={speciality}
              className="flex flex-1 flex-col gap-1 border rounded py-2 px-3"
              name=""
              id=""
            >
              <option value="General physician">General physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="mt-4 mb-2">Education</p>
            <input
              onChange={(e) => setDegree(e.target.value)}
              value={degree}
              className="border rounded py-2 px-3"
              type="text"
              placeholder="Education"
              required
            />
          </div>
          <div>
            <p className="mt-4 mb-2">Address</p>
            <input
              onChange={(e) => setAddress1(e.target.value)}
              value={address1}
              className="border rounded py-2 px-3 m-1"
              type="text"
              placeholder="address 1"
              required
            />
            <input
              onChange={(e) => setAddress2(e.target.value)}
              value={address2}
              className="border rounded py-2 px-3 m-1"
              type="text"
              placeholder="address 2"
              required
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full pt-2 border rounded"
            type="text"
            placeholder=" Write about doctor"
            rows={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary rounded-full mt-4">
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
