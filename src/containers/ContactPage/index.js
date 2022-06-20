import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import styled from "styled-components";


export default function ContactPage() {

  const FORM =styled.form`
  display: table;
  margin: 40px auto;

  input,
  textarea {
    font: 18px Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    display: block;
    border: none;
    padding: 20px;
    width: 300px;
    margin-bottom: 20px;
    font-size: 18px;
    outline: none;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      transition: all 0.2s ease-in-out;
      color: #999;
      font: 18px Helvetica, Arial, sans-serif;
    }

    &:focus,
    &.populated {
      padding-top: 28px;
      padding-bottom: 12px;

      &::placeholder {
        color: transparent;
      }
    }
  }

  textarea {
    height: 200px;
  }


  `;

  const BUTTON=styled.button`
  transition: all 0.2s ease-in-out;
  font: 18px Helvetica, Arial, sans-serif;
  border: none;
  background: #1792E8;
  color: #fff;
  padding: 20px;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 5px;

  &:hover {
    background: #0e82d4;
    cursor: pointer;
  }
`;
  
  const { handleSubmit, register, errors } = useForm();
  
  const onSubmit = data => {
   // alert(JSON.stringify(data));
    axios.post("https://xytyanjh4l.execute-api.ap-southeast-2.amazonaws.com/prod/contact",JSON.stringify(data));
  };

  
  return (

<section className="slide fade-6 kenBurns">
  <div className="content">
    <div className="container">
      <div className="wrap">
      <div className="fix-12-12">
          <ul className="flex left">
            <li className="col-6-12 fromBottomLeft">
              <p className="opacity-6 margin-bottom-2 ae-1">Lantheum</p>
              <h1 className="ae-2">Contact Us</h1>
              <div className="ae-3"><p className="opacity-8">Marketing.</p></div>       
              <div className="ae-3"><p className="opacity-8">&nbsp;</p></div>
              </li>
              </ul>
              </div>

              <ul className="flex">
                <li className="col-6-12 ae-3">

    <FORM onSubmit={handleSubmit(onSubmit)}>
    <h3>Email:</h3>
      <input
        name="email"
        
        type="email"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message}
      <h3>Name:</h3>
      <input
        name="name"
        type="text"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
<h3>Message:</h3>
      <textarea
        name="message"
        type="text"
        ref={register({
          required: "Message Required",
          pattern: {
            value: /[a-zA-Z0-9]/g,
            message: "alphanumeric only "
          }
        })}
      ></textarea>
      {errors.message && errors.message.message}

      <BUTTON type="submit">Submit</BUTTON>
      
    </FORM>
    
    </li></ul>

        </div></div></div>
        <div className="background" style={{backgroundImage:"url('https://lantheum.s3.ap-southeast-2.amazonaws.com/lantheum_about.jpg')"}}></div>
          </section>
    
  );
  
};
