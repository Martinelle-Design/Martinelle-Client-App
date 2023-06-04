import PageTitle from "../utilities/pageTitle/PageTitle";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
import useLoadingState from "../hooks/use-loading-state";
import { useState } from "react";
import { validate as validateEmail } from "email-validator";
import { validatePhoneNumber } from "../utilities/helpers/validatePhone";
import axios from "axios";
import LoadingIcon from "../utilities/loadingIcon/LoadingIcon";
export type ContactMeInputProps = {
  sender: {
    email: string;
    phone?: string;
  };
  subject: string;
  message: string;
  name: string;
};
const submitFormFunc = async (e?: ContactMeInputProps) => {
  const result = await axios({
    method: "post",
    url: `https://${process.env.REACT_APP_API_ENDPOINT}/contact-info/contact`,
    data: e,
  });
  return result.data;
};
const namespace = "contact-pg";
const ContactPageFormInput = ({
  title,
  name,
  required,
  multiline,
  error,
  onBlur,
  onFocus,
  onChange,
  errMessage,
}: {
  title: string;
  name: string;
  required?: boolean;
  multiline?: boolean;
  error?: boolean;
  errMessage?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <FormControl
      defaultValue=""
      required={required}
      error={error}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    >
      <FormLabel className={`${namespace}-form-label`} error={error}>
        {title} {!required && <i>(Optional)</i>}
      </FormLabel>
      <TextField
        error={error}
        className={`${namespace}-form-input`}
        name={name}
        required={required}
        multiline={multiline}
        helperText={error && errMessage}
      ></TextField>
    </FormControl>
  );
};
const PhoneInput = () => {
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [value, setValue] = useState("");
  return (
    <ContactPageFormInput
      title="PHONE"
      name="phone_number"
      error={!isPhoneValid}
      onChange={(e) => setValue(e.target.value)}
      onFocus={() => setIsPhoneValid(true)}
      onBlur={() => setIsPhoneValid(validatePhoneNumber(value))}
      errMessage="Please enter a valid phone number"
    />
  );
};
const EmailInput = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [value, setValue] = useState("");
  return (
    <ContactPageFormInput
      title="EMAIL"
      name="email"
      required
      onChange={(e) => setValue(e.target.value)}
      error={!isEmailValid}
      onFocus={() => setIsEmailValid(true)}
      onBlur={() => setIsEmailValid(validateEmail(value))}
      errMessage="Please enter a valid email"
    />
  );
};
const ContactPageTextSection = ({
  children,
  headerText,
}: {
  headerText: string;
  children: JSX.Element | string | JSX.Element[] | string[];
}) => {
  return (
    <div className={`${namespace}-text-section`}>
      <h2>{headerText}</h2>
      <p>{children}</p>
    </div>
  );
};

const ContactPage = () => {
  const { status, callFunction } = useLoadingState({
    asyncFunc: submitFormFunc,
  });
  const [successMessage, setSuccessMessage] = useState<{
    err: boolean;
    message: string;
  }>({
    err: false,
    message: "",
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { first_name, last_name, email, phone_number, subject, message } =
      data;
    const inputs: ContactMeInputProps = {
      name: `${first_name.toString()} ${last_name.toString()}`,
      sender: {
        phone: phone_number.toString(),
        email: email.toString(),
      },
      subject: subject.toString(),
      message: message.toString(),
    };
    callFunction(inputs);
  };
  return (
    <div className={namespace}>
      <PageTitle text={"Contact Us".toUpperCase()} />
      <ContactPageTextSection headerText="GENERAL INQUIRIES">
        <>
          For general inquires or website feedback, please contact us at{" "}
          <b>martinelledesign@gmail.com</b> or leave us a message using the form
          below.
        </>
      </ContactPageTextSection>
      <ContactPageTextSection headerText="BUSINESS DEVELOPMENT">
        <>
          Interested in collaborating with the Martinelle team? Please tell us
          more at <b>martinelledesign@gmail.com</b>
        </>
      </ContactPageTextSection>
      <ContactPageTextSection headerText="MEDIA INQUIRIES">
        <>
          We welcome all media inquiries at <b>martinelledesign@gmail.com</b>
        </>
      </ContactPageTextSection>
      <form id={`${namespace}-form`} onSubmit={onSubmit}>
        {status === "loading" && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ebebeb",
            }}
          >
            <LoadingIcon
              strokeColor="#37673F"
              backgroundColor="#ebebeb"
              width={"35%"}
            />
          </div>
        )}
        <h3>GENERAL INQUIRIES </h3>
        <p>
          Thank you for your interest in Martinelle Design. It is our pleasure
          to get in contact with you. A member of our team will reach out to you
          shortly.
        </p>
        <div className={`${namespace}-form-inner`}>
          <div className={`${namespace}-form-row`}>
            <ContactPageFormInput
              title="FIRST NAME"
              name="first_name"
              required
            />
            <ContactPageFormInput title="LAST NAME" name="last_name" required />
          </div>
          <div className={`${namespace}-form-row`}>
            <EmailInput />
            <PhoneInput />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ContactPageFormInput title="SUBJECT" name="subject" required />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ContactPageFormInput
              title="MESSAGE"
              name="message"
              required
              multiline
            />
          </div>
        </div>
        <button type="submit" className={`${namespace}-form-submit-btn`}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};
export default ContactPage;
