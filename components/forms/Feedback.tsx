import React, { FC, useEffect, useRef, useState } from "react";
import FetchStatusBadge from "../ui/FetchStatusBadge";
import styles from "./Feedback.module.scss";

const Feedback: FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedbackInputRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const clearInputs = () => {
    nameInputRef.current!.value = "";
    emailInputRef.current!.value = "";
    feedbackInputRef.current!.value = "";
  };

  const handleError = (error: unknown) => {
    setIsLoading(false);
    setErrorMsg(`${error}`);
    clearInputs();
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const name = nameInputRef.current!.value;
    const email = emailInputRef.current!.value;
    const feedback = feedbackInputRef.current!.value;

    if (
      name === "" ||
      name.trim() === "" ||
      email.length < 3 ||
      email.trim() === "" ||
      !email.includes("@") ||
      feedback === "" ||
      feedback.trim() === ""
    ) {
      handleError("Invalid Input");
      return;
    }

    const dbUrl = process.env.DB_URL;

    if (!dbUrl) {
      handleError("Wrong DB Url");
      return;
    }

    try {
      await fetch(dbUrl + "/feedbacks.json", {
        method: "POST",
        body: JSON.stringify({ name, email, feedback }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      handleError(error);
      return;
    }
    setIsLoading(false);
    setIsSuccess(true);
    clearInputs();
  };

  // remove error/success badge after 5 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      if (errorMsg) {
        setErrorMsg("");
      }
      if (isSuccess) {
        setIsSuccess(false);
      }
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [errorMsg, isSuccess]);

  return (
    <div className={styles.container}>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter your name"
          ref={nameInputRef}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter your email"
          ref={emailInputRef}
        />
        <label htmlFor="feedback">Feedback</label>
        <textarea
          name="feedback"
          id="feedback"
          required
          placeholder="Enter your feedback"
          ref={feedbackInputRef}
        ></textarea>
        {isLoading && (
          <div className={styles.badge}>
            <FetchStatusBadge status="loading" />
          </div>
        )}
        {isSuccess && (
          <div className={styles.badge}>
            <FetchStatusBadge status="success" />
          </div>
        )}
        {errorMsg && (
          <div className={styles.badge}>
            <FetchStatusBadge status="error" errorMsg={errorMsg} />
          </div>
        )}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
