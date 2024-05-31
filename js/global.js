const navbar = {
	template: `<header class="sticky-top">
    <nav class="navbar-main navbar navbar-expand-lg bg-dark-subtle navbar__main" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand fw-semibold fs-3 logo-web" href="/index.html">
                <span class="se">Se</span><span class="ndas">nDas</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto flex align-items-center mb-2 mb-lg-0 gap-4">
                    <li class="nav-item animate-scale">
                        <a class="link-underline-opacity-0 link-light" aria-current="page"
                            href="/index.html">Home</a>
                    </li>
                    <li class="nav-item animate-scale">
                        <a class="link-underline-opacity-0 link-light" href="/pages/galery.html">Gallery</a>
                    </li>
                    <li class="nav-item animate-scale">
                        <a class="link-underline-opacity-0 link-light" href="/pages/about-us.html">About Us</a>
                    </li>
                    <li class="nav-item animate-scale">
                        <a class="link-underline-opacity-0 link-light" href="/pages/contact.html">Contact</a>
                    </li>
                </ul>
                <div class="d-flex justify-content-center align-items-center p-2">
                    <a href="/pages/login.html" class="link-light link-opacity-75-hover animate-scale">
                        <i class="fa-regular fa-user fa-xl"></i>
                    </a>

                </div>
            </div>

        </div>
    </nav>
</header>
`,
};

const footer = {
	template: `<footer>
    <div class="footer-main">

        <!-- Nombre -->
        <div class="footer-title">
            <a href="/index.html" class="logo-web">
                <span class="se">Se</span><span class="ndas">nDas</span>
            </a>
        </div>

        <!-- redes sociales -->
        <div class="footer-socials">
            <a href="#" class="animate-rotate">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png

               " alt="logo de facebook">
            </a>
            <a href="#" class="animate-rotate">
                <img src="https://icongr.am/devicon/facebook-original.svg?size=128&color=currentColor

               " alt="logo de facebook">
            </a>
            <a href="#" class="animate-rotate">
                <img src="https://icongr.am/simple/github.svg?size=128&color=e9dddd&colored=false"
                    alt="logo de github">
            </a>
            <a href="#" class="animate-rotate">
                <img src="https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor

                " alt="logo linkedin">
            </a>
        </div>

        <!-- derechos -->
        <div class="footer-politics">
            <p>😁 Todos los derechos reservados - Devs</p>
        </div>


    </div>
</footer>
`,
};

const body = Vue.createApp({
	components: {
		navbar: navbar,
		foter: footer,
	},
}).mount("body");
