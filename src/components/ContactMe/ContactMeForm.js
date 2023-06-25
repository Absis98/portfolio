import "../../App.css";

function ContactMeForm() {
    return(
        <div className="d-flex-column w-75  mx-auto contact-form-container my-5">
            <div className="">
                <div className="text-left form-label">Name</div>
                <input type="text" className="w-100 contact__form-input" placeholder="Enter your Name"/>
            </div>

            <div className="mt-5">
                <div className="text-left form-label">Email</div>
                <input type="text" className="w-100 contact__form-input" placeholder="Enter your Email"/>
            </div>

            <div className="mt-5">
                <div className="text-left form-label">Message</div>
                <input type="text" className="w-100 contact__form-input input_message-field" placeholder="Enter your Message"/>
            </div>
            <div class="d-flex justify-content-end mt-5">
                <button type="submit" class="btn btn--theme contact__btn">
            Submit
          </button>
            </div>
            
        </div>
    )
}
export default ContactMeForm;