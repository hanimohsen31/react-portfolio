import "./Contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
        "service_418rhh9",
        "template_dmfwsjg",
        e.target,
        "user_m0JLrArxjn3mElbvi39fd"
      )
      .then((response) => {
        console.log(response);
        alert('I have Recieved your Message');
        // to rest input values to empty
        document.querySelector('#email').value = '';
        document.querySelector('#textarea').value = ''; 

      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="Contact" id="Contact">
      <div className="container">
        <div className="left">
          <img src="assets/imgs/shake.svg" alt="" />
        </div>

        <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={sendEmail}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" placeholder="Email" required/>
            </div>

            <div>
              <label htmlFor="textarea">Message</label>
              <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder="Message" required></textarea>
            </div>

            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
