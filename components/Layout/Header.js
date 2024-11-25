export default function HeaderComponent(){
    return(
        <header id="header">
            <div class="container">

            <div id="logo" class="pull-left">
                {/*} <h1><a href="#main">C<span>o</span>nf</a></h1>*/}
                <a href="#intro" class="scrollto"><img src="/assets/img/logo.png" alt="" title=""/></a>
            </div>

            <nav id="nav-menu-container">
                <ul class="nav-menu">
                <li class="menu-active"><a href="#intro">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#speakers">Speakers</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#venue">Venue</a></li>
                <li><a href="#hotels">Hotels</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="buy-tickets"><a href="#buy-tickets">Buy Tickets</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}