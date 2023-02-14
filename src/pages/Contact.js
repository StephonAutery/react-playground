import { useState } from "react";

// Within your Contact.js component html, add a <form> element with one text <input> inside, with a placeholder of “Enter your name”.
// Within the Contact html, add a <button> within your form under the input element. Set the button’s text to “Submit”.
// Within the Contact component function, create a state variable userName and set its initial value to an empty string.
// Within the html of Contact, add a <p> right above the form element that outputs {userName}.
// Create a function above your Contact return statement called “handleChange”.
// Add an “onChange” prop to your form input and pass in a reference to your handleChange function.
// Within the handleChange function, set the userName variable to the event.target.value.
// Check that when you type into the input, the paragraph is updated with the value in real-time.
// Note: If it’s not working, make sure to check the browser console. (edited)

function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ color: { name } }}>Contact Form</h1>
      <label>
        <input
          type="text"
          value={name}
          placeholder="enter your name "
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Contact;
