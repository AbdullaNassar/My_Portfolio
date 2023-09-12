import "./Contact.css"
function Contact(){
    return( 
        <div style={{paddingTop:"50px"}}>
            <div className="container">
            <div class="special-heading" style={{color:"#4E93FF"}}>Contact</div>
            <p style={{paddingBottom:"20px"}}>We are born to contact</p>
        
            <div class="contact-content">
                <div class="contact-details">
                    <h2>Contact Details</h2>
                    <p class="name">
                        Cairo, Egypt
                        <br/>
                        abdallahmoemen44@gmail.com
                        <br/>
                        01066130828
                    </p>
                    <h4 class="small-contact">Find me on social network</h4>
                    <div class="contact-icons">
                        <a target="_blank" href="mailto:abdallahmoemen44@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/abdallah-moemen/"><i class="fa-brands fa-linkedin"></i></a>
                        <a target="_blank" href="https://www.facebook.com/abdallah.moemen.7"><i class="fa-brands fa-facebook"></i></a>
                        <a target="_blank" href="https://www.instagram.com/abdallahmoemen/"><i class="fa-brands fa-instagram"></i></a>
                        <a target="_blank" href="https://web.whatsapp.com/send/?phone=201063698275"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            </div>
        </div>    
    );
}

export default Contact;