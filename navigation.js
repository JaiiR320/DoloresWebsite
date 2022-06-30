class DNavi extends HTMLElement {
    constructor(){
        super();

        const div = document.createElement('div');
        div.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img class="top-left-logo" src="/img/top-left-logo.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li id="home" class="nav-item ${(this.getAttribute('active') === 'home' ? "active" : "")}">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li id="menu" class="nav-item ${(this.getAttribute('active') === 'menu' ? "active" : "")}">
                        <a class="nav-link" href="/menu.html">Menu</a>
                    </li>
                    <li id="reservation" class="nav-item ${(this.getAttribute('active') === 'reserve' ? "active" : "")}">
                        <a class="nav-link" href="/reservation.html">Reserve</a>
                    </li>
                    <li id="order" class="nav-item ${(this.getAttribute('active') === 'order' ? "active" : "")}">
                        <a class="nav-link" href="/order.html">Order</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>`;

        this.innerHTML = div.innerHTML;
    }
}

window.customElements.define('d-navi', DNavi);

/**
                    <li id="reserve" class="nav-item ${(this.getAttribute('active') === 'reserve' ? "active" : "")}">	
                        <a class="nav-link" href="/reservation.html">Reservations</a>
                    </li>
                    <li id="order" class="nav-item ${(this.getAttribute('active') === 'order' ? "active" : "")}">
                        <a class="nav-link" href="/order.html">Order</a>
                    </li>
 */