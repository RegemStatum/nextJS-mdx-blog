import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./EmailSubscription.module.scss";
import FetchStatusBadge from "../ui/FetchStatusBadge";

const EmailSubscription: FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleError = (msg: unknown) => {
    setIsLoading(false);
    setErrorMsg(`${msg}`);
    emailInputRef.current!.value = "";
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    let email: string = "";
    if (emailInputRef.current) {
      email = emailInputRef.current.value;
    }

    if (
      email !== "" &&
      email.trim() !== "" &&
      email.includes("@") &&
      email.length > 3
    ) {
      const dbUrl = process.env.DB_URL;

      if (!dbUrl) {
        handleError("Wrong DB url");
        return;
      }

      try {
        await fetch(dbUrl, {
          method: "POST",
          body: JSON.stringify(email),
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
      emailInputRef.current!.value = "";
    } else {
      handleError("Invalid Input");
    }
  };

  // remove error badge after 5 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg("");
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [errorMsg]);

  // remove success badge after 5 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [isSuccess]);

  return (
    <div className={styles.container}>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email here"
          ref={emailInputRef}
        />
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
          Get interesting posts
        </button>
      </form>
    </div>
  );
};

export default EmailSubscription;
