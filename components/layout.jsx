import { useEffect } from "react";
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'rc-tree/assets/index.css';
import 'react-input-range/lib/css/index.css';
import 'react-image-lightbox/style.css';
import 'react-toastify/dist/ReactToastify.min.css';


// Import Custom Coponent
import ALink from "./common/ALink";
import StickyNavbar from "./common/partials/sticky-navbar";
import Header from "./common/header";
import Footer from "./common/footer";
import MobileMenu from "./common/partials/mobile-menu";
import QuickModal from "../components/features/modals/quickview";
import VideoModal from "../components/features/modals/video-modal";

// Import Modal Action
import { actions } from '../store/modal'

// Import Utils
import { stickyInit, scrollTopHandlder, scrollTopInit } from "../utils";

function Layout ( { children, hideQuickView, hideVideo } ) {
    useEffect( () => {
        window.addEventListener( "scroll", stickyInit, { passive: true } );
        window.addEventListener( "scroll", scrollTopInit, { passive: true } );
        window.addEventListener( "resize", stickyInit );
        hideQuickView();
        hideVideo();

        return () => {
            window.removeEventListener( "scroll", stickyInit, { passive: true } );
            window.removeEventListener( "scroll", scrollTopInit, { passive: true } );
            window.removeEventListener( "resize", stickyInit );
        }
    }, [] )

    return (
        <>
            <div className="page-wrapper">
                <div className="top-notice bg-dark text-white pt-3">
                    <div className="container text-center d-flex align-items-center justify-content-center flex-wrap">
                        <img src="images/home/shop-logo.png" width="116" height="23" alt="logo" />
                        <h5 className="d-inline-block mb-0 pl-3 pr-3 pt-2 pb-2">The Lowest Prices Once A Month! Hurry To Snap Up</h5>
                        <ALink href="/shop" className="btn btn-darkcategory ls-0">SHOP NOW!</ALink>
                    </div>
                </div>

                <Header />

                { children }

                <Footer />

                <ToastContainer
                    autoClose={ 3000 }
                    duration={ 300 }
                    newestOnTo={ true }
                    draggable={ false }
                    className="toast-container"
                    position="bottom-right"
                    closeButton={ false }
                    hideProgressBar={ true }
                    newestOnTop={ true }
                />

                <QuickModal />
                <VideoModal />

                <div className="wishlist-popup"><div className="wishlist-popup-msg">Product added!</div></div>
            </div>

            <MobileMenu />
            <StickyNavbar />

            <a id="scroll-top" href="#" title="Top" role="button" className="btn-scroll" onClick={ scrollTopHandlder }><i className="icon-angle-up"></i></a>
        </>
    )
}

export default connect( null, actions )( Layout );