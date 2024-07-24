import { useFormik } from "formik";
import { favicon, mail } from "../assets";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Button from "./Button";
import { Trans, useTranslation } from "react-i18next";
import Modal from "./Modal";
import { useEscapePress } from "../utils/use-escape-press";

const LetsTalk = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const onEscapePress = () => {
    if (open) setOpen(null);
  };

  useEscapePress(onEscapePress);

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
      name: Yup.string().required(t(`contact_yup.0`)),
      email: Yup.string()
        .email(t(`contact_yup.1`))
        .required(t(`contact_yup.2`)),
      subject: Yup.string().required(t(`contact_yup.3`)),
      message: Yup.string().required(t(`contact_yup.4`)),
    }),

    //Submit Form
    onSubmit: (values, { resetForm }) => {
      sendEmail();
      resetForm();
      setOpen(true);
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
    <section id="contact" className="relative h-[80vh]">
      <div className="relative mx-5 sm:mx-10 text-left flex items-center justify-center h-full">
        {/* text e form */}
        <div className="flex flex-col w-full max-lg:max-w-[50rem] max-w-[70rem]">
          {/* text */}
          <h2 className="h1 font-lexend font-bold text-center mb-15 lg:mb-20 text-color-7">
            <Trans
              i18nKey={t("contact")}
              components={{
                1: <span className="text-transparent gradient-text" />,
              }}
            />
          </h2>
          {/* form */}
          <form
            ref={form}
            onSubmit={formik.handleSubmit}
            className="flex-1 flex flex-col gap-8 sm:gap-10 lg:gap-15 w-full mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10 sm:gap-y-12 w-full">
              {/* Name */}
              <div className="relative max-sm:col-span-2">
                <div className="absolute rounded-lg inset-0 bg-noisy-texture opacity-10" />
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
                  className={`absolute opacity-100 left-0 -top-7 input border-none bg-none text-color-5 transition-all peer-placeholder-shown:text-[0.9rem] sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-[1rem] peer-focus:-top-7 ${formik.touched.name && formik.errors.name ? "peer-focus:text-color-3 peer-placeholder-shown:text-color-3/50" : "peer-focus:text-color-7 peer-placeholder-shown:text-color-7/30"}`}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : t(`contact_form.0`)}
                </label>
              </div>

              {/* Email */}
              <div className="relative max-sm:col-span-2 max-sm:row-start-2">
                <div className="absolute rounded-lg inset-0 bg-noisy-texture opacity-10" />
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
                  className={`absolute opacity-100 left-0 -top-7 input border-none bg-none text-color-5 transition-all peer-placeholder-shown:text-[0.9rem] sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-[1rem] peer-focus:-top-7 ${formik.touched.email && formik.errors.email ? "peer-focus:text-color-3 peer-placeholder-shown:text-color-3/50" : "peer-focus:text-color-7 peer-placeholder-shown:text-color-7/30"}`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
              </div>

              {/* Message */}
              <div className="relative row-span-3 col-span-2 max-sm:row-start-4 max-lg:row-start-3">
                <div className="absolute rounded-lg inset-0 bottom-2 bg-noisy-texture object-cover opacity-10" />
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
                  className={`absolute opacity-100 left-0 -top-7 input border-none bg-none text-color-5 transition-all peer-placeholder-shown:text-[0.9rem] sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-[1rem] peer-focus:-top-7 ${formik.touched.message && formik.errors.message ? "peer-focus:text-color-3 peer-placeholder-shown:text-color-3/50" : "peer-focus:text-color-7 peer-placeholder-shown:text-color-7/30"}`}
                >
                  {formik.touched.message && formik.errors.message
                    ? formik.errors.message
                    : t(`contact_form.2`)}
                </label>
              </div>

              {/* Subject */}
              <div className="relative col-span-2">
                <div className="absolute rounded-lg inset-0 bg-noisy-texture opacity-10" />
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
                  className={`absolute opacity-100 left-0 -top-7 input border-none bg-none text-color-5 transition-all peer-placeholder-shown:text-[0.9rem] sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-[1rem] peer-focus:-top-7 ${formik.touched.subject && formik.errors.subject ? "peer-focus:text-color-3 peer-placeholder-shown:text-color-3/50" : "peer-focus:text-color-7 peer-placeholder-shown:text-color-7/30"}`}
                >
                  {formik.touched.subject && formik.errors.subject
                    ? formik.errors.subject
                    : t(`contact_form.1`)}
                </label>
              </div>
            </div>

            {/* Button */}
            <Button
              className="justify-center"
              img={favicon}
              // onClick={() => setOpen(true)}
              alt="Moon Icon"
              text={t(`contact_btn.0`)}
              subtext={t(`contact_btn.1`)}
            />
          </form>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center p-7 pb-15">
          <img
            src={mail}
            width={50}
            height={50}
            className="mx-auto"
            alt="mail"
          />
          <div className="mx-auto mb-4">
            <h3 className="text-2xl font-black my-2 text-color-1">
              {t(`contact_dialog.0`)}
            </h3>
            <p className="text-color-7 font-lexend font-light mx-auto">
              {t(`contact_dialog.1`)}
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default LetsTalk;
