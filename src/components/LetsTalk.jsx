import { useFormik } from "formik";
import { favicon } from "../assets";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const LetsTalk = () => {
  const form = useRef();
  //Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    //Validate Form
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("What's the subject?"),
      message: Yup.string().required("What's you message"),
    }),

    //Submit Form
    onSubmit: (values, { resetForm }) => {
      sendEmail();
      resetForm();
    },
  });

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div id="contact" className="relative h-[70vh]">
      <div className="relative container mx-auto text-center xl:text-left flex items-center justify-center h-full">
        {/* text e form */}
        <div className="flex flex-col w-full max-w-[70rem]">
          {/* text */}
          <h2 className="h1 font-lexend font-bold text-center mb-20 text-color-7">
            Let&apos;s{" "}
            <span className="text-transparent gradient-text">Talk</span>
          </h2>
          {/* form */}
          <form
            ref={form}
            onSubmit={formik.handleSubmit}
            className="flex-1 flex flex-col gap-15 w-full mx-auto"
          >
            <div className="grid grid-cols-4 gap-6 gap-y-12 w-full">
              {/* Name */}
              <div className="relative">
                <div className="absolute rounded-lg inset-0 bg-noisy opacity-10" />
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  placeholder="Name"
                  className="input peer"
                />
                <label
                  htmlFor="name"
                  className={`absolute opacity-100 left-0 -top-7 input border-none bg-none text-color-5 transition-all peer-placeholder-shown:text-base  peer-placeholder-shown:top-[1rem] peer-focus:-top-7 ${formik.touched.name && formik.errors.name ? "peer-focus:text-color-3 peer-placeholder-shown:text-color-3/50" : "peer-focus:text-color-7 peer-placeholder-shown:text-color-7/30"}`}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute rounded-lg inset-0 bg-noisy opacity-10" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="email"
                  className="input peer"
                />
                <label
                  htmlFor="email"
                  className={`absolute opacity-100 left-0 -top-7 input border-none bg-none text-color-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-[1rem] peer-focus:-top-7 ${formik.touched.email && formik.errors.email ? "peer-focus:text-color-3 peer-placeholder-shown:text-color-3/50" : "peer-focus:text-color-7 peer-placeholder-shown:text-color-7/30"}`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
              </div>

              {/* Message */}
              <div className="relative row-span-3 col-span-2">
                <div className="absolute rounded-lg inset-0 bg-noisy opacity-10" />
                <textarea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="message"
                  className="textarea peer"
                />
                <label
                  htmlFor="message"
                  className={`absolute opacity-100 left-0 -top-7 input border-none bg-none text-color-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-[1rem] peer-focus:-top-7 ${formik.touched.subject && formik.errors.subject ? "peer-focus:text-color-3 peer-placeholder-shown:text-color-3/50" : "peer-focus:text-color-7 peer-placeholder-shown:text-color-7/30"}`}
                >
                  {formik.touched.message && formik.errors.message
                    ? formik.errors.message
                    : "Message"}
                </label>
              </div>

              {/* Subject */}
              <div className="relative col-span-2">
                <div className="absolute rounded-lg inset-0 bg-noisy opacity-10" />
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="subject"
                  className="input peer"
                />
                <label
                  htmlFor="subject"
                  className={`absolute opacity-100 left-0 -top-7 input border-none bg-none text-color-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-[1rem] peer-focus:-top-7 ${formik.touched.subject && formik.errors.subject ? "peer-focus:text-color-3 peer-placeholder-shown:text-color-3/50" : "peer-focus:text-color-7 peer-placeholder-shown:text-color-7/30"}`}
                >
                  {formik.touched.subject && formik.errors.subject
                    ? formik.errors.subject
                    : "Subject"}
                </label>
              </div>
            </div>

            {/* Button */}
            <div className="grid gap-8 items-start justify-center">
              <div className="relative group font-lexend">
                <div className="absolute inset-0.5 bg-gradient-to-r from-color-1 to-color-5 rounded-sm blur opacity-75 group-hover:opacity-100 group-hover:duration-200 transition duration-1000 animate-tilt" />
                <button
                  type="submit"
                  className="relative px-7 py-4 bg-n-8 rounded-lg leading-none flex items-center divide-x divide-gray-600"
                >
                  <span className="flex items-center space-x-5">
                    <img src={favicon} alt="moon icon" width={24} height={24} />
                    <span className="pr-6 text-color-7">Say hello</span>
                  </span>
                  <span className="pl-6 text-color-5 group-hover:text-color-7 transition duration-200 space-x-3">
                    <span>Let&apos;s talk</span>
                    <span className="text-xl leading-none">&rarr;</span>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
