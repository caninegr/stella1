import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ContactForm = () => {
  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Το όνομα σου είναι απαραίτητο"),
    petname: Yup.string().required("Δεν πιστεύω να ξέχασες πως λένε το κατοικίδιο σου..."),
    petage: Yup.string().required("Ευαίσθητη ερώτηση, αλλά πρέπει να απαντήσεις!"),
    pettype: Yup.string().required("Πρέπει να ξέρω!"),
    projectGoal: Yup.string().required("Please, write your project goal."),
    vetname: Yup.string(),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    mobile: Yup.string().required("Πως θα επικοινωνήσω μαζί σου;"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));
    e.target.reset();
  }

  //const sendEmail = () => {};

  return (
    //<form onSubmit={sendEmail} className="contact_form">
    <form onSubmit={handleSubmit(onSubmit)} className="contact_form">

      <div className="ptf-form-group">
        <label data-number="01">Πως σε λένε;</label>
        <input
          type="text"
          name="name"
          {...register("name")}
          className={`${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="02">Ποιο είναι το όνομα του κατοικίδιου σου;</label>
        <input
          type="text"
          name="petname"
          {...register("petname")}
          className={`${errors.petname ? "is-invalid" : ""}`}
        />
        {errors.petname && (
          <div className="invalid-feedback">{errors.petname?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="03">Τι ηλικία έχει;</label>
        <input
          type="text"
          name="petage"
          {...register("petage")}
          className={`${errors.petage ? "is-invalid" : ""}`}
        />
        {errors.petage && (
          <div className="invalid-feedback">{errors.petage?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="04">Τι ζωάκι είναι;</label>
        <select
          name="pettype"
          {...register("pettype")}
          className={`${errors.pettype ? "is-invalid" : ""}`}
        >
          <option value="dog">Σκύλος</option>
          <option value="cat">Γάτα</option>
          <option value="other">Άλλο</option>
        </select>
        {errors.pettype && (
          <div className="invalid-feedback">{errors.pettype?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}    

      <div className="ptf-form-group">
        <label data-number="05">Ποιο είναι το email σου;</label>
        <input
          name="email"
          type="text"
          {...register("email")}
          className={` ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="06">Περιέγραψε το πρόβλημα που αντιμετωπίζεις.</label>
        <textarea
          type="text"
          name="projectGoal"
          {...register("projectGoal")}
          className={`${errors.projectGoal ? "is-invalid" : ""}`}
        />
        {errors.projectGoal && (
          <div className="invalid-feedback">{errors.projectGoal?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="07">Πως λέγεται ο/η κτηνίατρος σου;</label>
        <input
          type="text"
          name="vetname"
          {...register("vetname")}
          className={`${errors.vetname ? "is-invalid" : ""}`}
        />
        {errors.vetname && (
          <div className="invalid-feedback">{errors.vetname?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="08">Το κινητό σου τηλέφωνο;</label>
        <input
          type="text"
          name="mobile"
          {...register("mobile")}
          className={`${errors.mobile ? "is-invalid" : ""}`}
        />
        {errors.mobile && (
          <div className="invalid-feedback">{errors.mobile?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "5.625rem" }}></div>

      <button className="ptf-submit-button">
        Αποστολή
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 17 17"
        >
          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
        </svg>
      </button>
      {/* End .ptf-submit-button */}
    </form>
  );
};

export default ContactForm;
