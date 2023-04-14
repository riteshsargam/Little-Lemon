import './Testimonials.css';
import face1 from '../../assets/clown-g0e9a96eb1_1920.jpg';

function Testimonials() {
    return (

        <section className="testimonials">
                    <div className="testimonial-title"><h2>Testimonials</h2></div>
<div>
        <div className="testimonial-container">

            <div className="testimonial">
            <h3 className="rating">Rating: &#9733;&#9733;&#9733;&#9733;&#9734;</h3>
            <img src={face1} alt="Greek Salad" />
            <h3 className="rater-name">Jerome Smith</h3>
            <p>The Mediterranean restaurant I visited had fantastic food, great service, and a beautiful atmosphere.</p>
            </div>

            <div className="testimonial">
            <h3 className="rating">Rating: &#9733;&#9733;&#9733;&#9734;&#9734;</h3>
            <img src={face1} alt="Greek Salad" />
            <h3 className="rater-name">Mr. Smith</h3>
            <p>I highly recommend the Mediterranean restaurant for their delicious hummus, flavorful shish kebab, and exceptional service.</p>
            </div>

            <div className="testimonial">
            <h3 className="rating">Rating: &#9733;&#9733;&#9733;&#9733;&#9734;</h3>
            <img src={face1} alt="Greek Salad" />
            <h3 className="rater-name">Mrs. Smith</h3>
            <p>If you're looking for a delicious Mediterranean meal with excellent service, this restaurant is definitely worth checking out.</p>
            </div>

              <div className="testimonial">
            <h3 className="rating">Rating: &#9733;&#9733;&#9734;&#9734;&#9734;</h3>
            <img src={face1} alt="Greek Salad" />
            <h3 className="rater-name">Aero Smith</h3>
            <p>The Mediterranean restaurant I visited had a great atmosphere, amazing food, and friendly staff.</p>
            </div>

        </div>
        </div>
        </section>
    )
}

export default Testimonials;