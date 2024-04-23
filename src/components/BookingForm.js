import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Heading, border, color } from "@chakra-ui/react";


const BookingForm = ({ availableTimes, dispatch}) => {
    const initialValues = {
        name: "",
        lastname: "",
        date: "",
        time: "18:00",
        guest: 1,
        occasion: "Birthday"
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required*"),
        lastname: Yup.string().required("Last name is required*"),
        date: Yup.date().required("Date is required*"),
        time: Yup.string().required("Time is required*"),
        guest: Yup.number().min(1, "Minimum of 1 guest*").max(10, "Maximum of 10 guests*").required("Number of guests is required*"),
        occasion: Yup.string().required("Occasion is required*")
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log("Form data:", values);
        resetForm();
        setSubmitting(false);
    };

    return(
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
            {({ isSubmitting, setFieldValue, isValid }) => (
                <Form style={{ display: "grid",
                               gap: "20px",
                               fontSize: "20px",
                               paddingLeft: "500px",
                               paddingRight: "500px",
                               paddingBottom: "50px",
                               backgroundColor: "#004225",
                               color: "#ffffff",
                               }}>
                    <Heading style={{textAlign: "center", color: "#f4ce14"}}>RESERVATIONS!</Heading>
                    <label htmlFor="name">Name</label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                        aria-label="Enter Name"
                        aria-required="true"
                        required
                        style={{
                            width: "100%",
                            fontSize: "15px",
                            borderRadius: "10px",
                            padding: "10px",
                            boxSizing: "border-box"}}
                    />
                    <ErrorMessage name="name" className="error" render={msg => <div style={{ color: "red"}}>{msg}</div>} />

                    <label htmlFor="lastname">Last Name</label>
                    <Field
                        type="text"
                        id="lastname"
                        name="lastname"
                        aria-label="Enter Last Name"
                        aria-required="true"
                        required
                        style={{
                            width: "100%",
                            fontSize: "15px",
                            borderRadius: "10px",
                            padding: "10px",
                            boxSizing: "border-box"}}
                    />
                    <ErrorMessage name="lastname" className="error" render={msg => <div style={{ color: "red"}}>{msg}</div>} />

                    <label htmlFor="date">Choose date</label>
                    <Field
                        type="date"
                        id="date"
                        name="date"
                        aria-label="Choose date"
                        aria-required="true"
                        required
                        onChange={(e) => {
                            const selectedDate = e.target.value;
                            dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
                            setFieldValue('date', selectedDate);
                        }}
                        style={{
                            width: "100%",
                            fontSize: "15px",
                            borderRadius: "10px",
                            padding: "10px",
                            boxSizing: "border-box"}}
                    />
                    <ErrorMessage name="date" className="error" render={msg => <div style={{ color: "red"}}>{msg}</div>} />

                    <label htmlFor="time">Choose time</label>
                    <Field
                        as="select"
                        id="time"
                        name="time"
                        aria-label="Choose time"
                        aria-required="true"
                        required
                        style={{
                            width: "100%",
                            fontSize: "15px",
                            borderRadius: "10px",
                            padding: "10px",
                            boxSizing: "border-box"}}
                    >
                        {availableTimes.map((timeOption, index) => (
                            <option key={index} value={timeOption}>
                                {timeOption}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage name="time" className="error" render={msg => <div style={{ color: "red"}}>{msg}</div>} />

                    <label htmlFor="guest">Number of guests</label>
                    <Field
                        type="number"
                        id="guest"
                        name="guest"
                        min="1"
                        max="10"
                        aria-label="Number of guests"
                        aria-required="true"
                        required
                        style={{
                            width: "100%",
                            fontSize: "15px",
                            borderRadius: "10px",
                            padding: "10px",
                            boxSizing: "border-box"}}
                    />
                    <ErrorMessage name="guest" className="error" render={msg => <div style={{ color: "red"}}>{msg}</div>} />

                    <label htmlFor="occasion">Occasion</label>
                    <Field
                        as="select"
                        id="occasion"
                        name="occasion"
                        aria-label="Occasion"
                        aria-required="true"
                        required
                        style={{
                            width: "100%",
                            fontSize: "15px",
                            borderRadius: "10px",
                            padding: "10px",
                            boxSizing: "border-box"}}
                    >
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </Field>
                    <ErrorMessage name="occasion" className="error" render={msg => <div style={{ color: "red"}}>{msg}</div>} />

                    <button type="submit" disabled={isSubmitting || !isValid}
                            style={{
                                fontSize: "15px",
                                borderRadius: "10px",
                                padding: "10px",
                                boxSizing: "border-box",
                                marginLeft: "100px",
                                marginRight: "100px",
                                backgroundColor: "#f4ce14"}}>
                        {isSubmitting ? "Submitting..." : "Make Your reservation"}
                    </button>
                </Form>
            )}
            </Formik>
    );
};

export default BookingForm;