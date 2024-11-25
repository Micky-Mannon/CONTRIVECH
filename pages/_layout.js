import FooterComponent from "@/components/Layout/Footer";
import HeaderComponent from "@/components/Layout/Header";

export default function Layout({children}){
    return(
        <>
            <HeaderComponent/>
                {children}
            <FooterComponent/>
            <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>
        </>
    )
}