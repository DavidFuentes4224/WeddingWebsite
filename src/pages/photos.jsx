import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";

import Carousel, { Modal, ModalGateway } from "react-images";
import { URLS } from "../files/photourls";

const pattern = /\?tr=w-(\d)/;

const photos2 = () => {
    let photos = [];
    URLS.forEach(url => {
        let regex = new RegExp(pattern);
        let width = Number(url.match(regex)[1]);
        let landscape = width === 6;
        photos.push({
            src: url,//landscape ? landscapeImgTemplate : portaitImgTempalte,
            width: width,
            height: landscape ? 4 : 6,
            datasrc: url,
            key: url
        });
    });
    return photos;
}

export const Photos = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <>
            <div className='main-page'>
            <h2 style={{paddingTop:'20px'}}> <a href="https://drive.google.com/drive/folders/1--9BQSzdh35ARtg6MSsQxFLbMaDDE4ti?usp=sharing">View the full album here</a></h2>
            <div className="centered" style={{padding:'50px'}}>
                <a href="https://drive.google.com/drive/folders/1--9BQSzdh35ARtg6MSsQxFLbMaDDE4ti?usp=sharing"><img src="images/love.png" className="icon-large" alt="download"/></a>
            </div>
                <Gallery photos={photos2()} direction={'column'} onClick={openLightbox}/>;
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos2().map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </>
    )
}