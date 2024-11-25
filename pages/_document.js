import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/assets/img/favicon.png" rel="icon"/>
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800" rel="stylesheet"/>
        <link href="/assets/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="/assets/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
        <link href="/assets/lib/animate/animate.min.css" rel="stylesheet"/>
        <link href="/assets/lib/venobox/venobox.css" rel="stylesheet"/>
        <link href="/assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
        <link href="/assets/css/style.css" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="/assets/lib/jquery/jquery.min.js"/>
        <Script src="/assets/lib/jquery/jquery-migrate.min.js"/>
        <Script src="/assets/lib/bootstrap/js/bootstrap.bundle.min.js"/>
        <Script src="/assets/lib/easing/easing.min.js"/>
        <Script src="/assets/lib/superfish/hoverIntent.js"/>
        <Script src="/assets/lib/superfish/superfish.min.js"/>
        <Script src="/assets/lib/wow/wow.min.js"/>
        <Script src="/assets/lib/venobox/venobox.min.js"/>
        <Script src="/assets/lib/owlcarousel/owl.carousel.min.js"/>
        <Script src="/assets/contactform/contactform.js"/>
        <Script src="/assets/js/main.js"/>      
      </body>
    </Html>
  );
}
