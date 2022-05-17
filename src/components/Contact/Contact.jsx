import "./Contact.scss";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="Contact" id="Contact">
      <div className="container">
        <div className="left">
          <img src="assets/imgs/shake.svg" alt="" />
        </div>

        <div className="right">
          <h2>Contact.</h2>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" placeholder="Email" />
            </div>

            <div>
              <label htmlFor="msg">Message</label>
              <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
            </div>

            <button type="submit" className="button" onSubmit={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
