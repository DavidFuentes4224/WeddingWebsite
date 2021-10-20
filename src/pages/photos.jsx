import Gallery from "react-photo-gallery";
import { URLS } from "../files/photourls";

const pattern = /\?tr=w-(\d)/;

const photos2 = () => {
    let photos = [];
    URLS.forEach(url => {
        let regex = new RegExp(pattern);
        let width = Number(url.match(regex)[1]);
        photos.push({ src: url, width: width, height: width == 4 ? 6 : 4, url: url });
    });
    return photos;
}

export const Photos = () => {
    return (
        <>
            <div className='main-page'>
                <Gallery photos={photos2()} direction={'column'} />;
            </div>
        </>
    )
}