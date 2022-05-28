class DFooter extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <footer>
        <div class="container-fluid padding">
            <div class="row text-center">
                <div class="col-md-2"></div>
                <div class="col-md-4">
                    <img class="footer-img" src="/img/footer-img-small.png"
                        alt="footer logo">
                    <hr class="light">
                    <p>(401) 409-2075</p>
                    <p>info@dolorespvd.com</p>
                    <p>100 Hope St.</p>
                    <p>Providence, RI, 02906</p>
                </div>
                <div class="col-md-4">
                    <hr class="light">
                    <h5>Our Hours</h5>
                    <hr class="light">
                    <div>
                        <p>Saturday 4-10</p>
                        <p>Sunday 11AM-3PM</p>
                        <p>Monday 4-9PM</p>
                        <p>Tuesday CLOSED</p>
                        <p>Wednesday 4-9PM</p>
                        <p>Thursday 4-9PM</p>
                        <p>Friday 4-10PM</p>
                    </div>
                </div>
                <div class="col-md-2"></div>
                <div class="col-12">
                    <hr class="light-100">
                    <h5>&copy;dolorespvd</h5>
                </div>
            </div>
        </div>
        </footer>
        `;
    }
}
window.customElements.define('d-footer', DFooter);