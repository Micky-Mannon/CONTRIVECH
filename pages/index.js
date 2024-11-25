import AboutSection from "@/components/IndexPage/About";
import TicketsSection from "@/components/IndexPage/BuyTicket";
import ContactSection from "@/components/IndexPage/Contact";
import FAQSection from "@/components/IndexPage/FAQ";
import GallerySection from "@/components/IndexPage/Gallery";
import HotelsSection from "@/components/IndexPage/Hotels";
import ScheduleSection from "@/components/IndexPage/Schedule";
import SpeakersSection from "@/components/IndexPage/Speakers";
import SponsorsSection from "@/components/IndexPage/Sponsors";
import SubscribeSection from "@/components/IndexPage/Subscribe";
import VenueSection from "@/components/IndexPage/Venue";

export default function Home(){
  return(
    <>
      <section id="intro">
        <div class="intro-container wow fadeIn">
          <h1 class="mb-4 pb-0">The Annual<br/><span>Marketing</span> Conference</h1>
          <p class="mb-4 pb-0">10-12 December, Downtown Conference Center, New York</p>
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video"
            data-autoplay="true"></a>
          <a href="#about" class="about-btn scrollto">About The Event</a>
        </div>
      </section>
      <main id="main">
        <AboutSection/>
        <SpeakersSection/>
        <ScheduleSection/>
        <VenueSection/>
        <HotelsSection/>
        <GallerySection/>
        <SponsorsSection/>
        <FAQSection/>
        <SubscribeSection/>
        <TicketsSection/>
        <ContactSection/>
      </main>
    </>
  )
}