import PageTitle from "../utilities/pageTitle/PageTitle";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
const namespace = "contact-pg";
const ContactPageFormInput = ({
  title,
  name,
  required,
  multiline,
}: {
  title: string;
  name: string;
  required?: boolean;
  multiline?: boolean;
}) => {
  return (
    <FormControl defaultValue="" required={required}>
      <FormLabel className={`${namespace}-form-label`}>
        {title} {!required && <i>(Optional)</i>}
      </FormLabel>
      <TextField
        className={`${namespace}-form-input`}
        name={name}
        required={required}
        multiline={multiline}
      ></TextField>
    </FormControl>
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
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              name="first-name"
              required
            />
            <ContactPageFormInput title="LAST NAME" name="last-name" required />
          </div>
          <div className={`${namespace}-form-row`}>
            <ContactPageFormInput title="EMAIL" name="email" required />
            <ContactPageFormInput title="PHONE" name="phone-number" />
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
