import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
    {
        original: 'https://ik.imagekit.io/magicman0007/IMG_3719_Ek_I9qXAY.jpg?tr=w-2400',
        thumbnail: 'https://ik.imagekit.io/magicman0007/IMG_3719_Ek_I9qXAY.jpg?tr=w-400',
    },
    {
        original: 'https://ik.imagekit.io/magicman0007/IMG_5087_uUdNBke_mG.jpg?tr=w-2400',
        thumbnail: 'https://ik.imagekit.io/magicman0007/IMG_5087_uUdNBke_mG.jpg?tr=w-600',
    },
    {
        original: 'https://ik.imagekit.io/magicman0007/IMG_5022_fKIlcgfa2.jpg?tr=w-2400',
        thumbnail: 'https://ik.imagekit.io/magicman0007/IMG_5022_fKIlcgfa2.jpg?tr=w-600',
    },
    {
        original: 'https://ik.imagekit.io/magicman0007/IMG_4584_LgRiFyTFw.jpg?tr=2400',
        thumbnail: 'https://ik.imagekit.io/magicman0007/IMG_4584_LgRiFyTFw.jpg?tr=w-600',
    },
    {
        original: 'https://ik.imagekit.io/magicman0007/IMG_3775_jyT8NbxK-.jpg?tr=w-2400',
        thumbnail: 'https://ik.imagekit.io/magicman0007/IMG_3775_jyT8NbxK-.jpg?tr=w-600',
    },
];

export const Home = () => {
    return (
        <>
            <div className='main-page'>
            <ImageGallery items={images} autoPlay={true} />

                <div className="centered" style={{ width: '80%' }}>
                    <img className="divider-image" src="https://ik.imagekit.io/magicman0007/flower_nrSJhkrDF.png?tr=w-255,h-350" alt={"flower"} />
                </div>
                <h1 style={{ letterspacing: '10px' }}>OUR STORY</h1>
                <div className="divider-line-short centered"></div>
                <div className="shadow-box">
                    <p>
                        David and Kelly met in 2018 on campus at Western Washington University.
                        Kelly was DJ’ing at the radio station when David wandered in.
                        Their first date consisted of talking about getting Frostys at Wendy’s,
                        driving out to the Wendy’s, and sitting in the Wendy’s parking lot too
                        wrapped up in conversation to get out of the car and actually get the
                        frozen treats.
                    </p>
                    <p>
                        When Kelly and David first met, they both had crazy busy lives. David
                        was working in Lynden and working on his computer science degree at Western.
                        Kelly was working two jobs and studying for her Bachelor's degree in English
                        Literature. Between speeding from work to school to home and back it was
                        difficult at first for Kelly and David to find the time to meet up for ‘real
                        dates.’ For their first few months, Kelly was working night shifts cocktailing
                        and usually would get off around 2am. David would usually meet Kelly halfway
                        between his house and hers in the parking lot of one of the local gas
                        stations where they would sit in their car, share music, and talk until
                        late hours of the night or until one of them had to speed off to class the
                        next morning. This would go on night after night for months.
                    </p>
                    <p>
                        David eventually left Western to pursue a job in his field,
                        while Kelly left one of her two jobs to focus more on school.
                        With these changes, they had more time to spend together, go
                        on more dates, and further their relationships. One day splashing
                        around in the ocean under the docks, an “I love you” slipped out.
                        Nearly a year later in the pouring rain, on the way to a fun packed
                        weekend of events in Seattle, David pulled over in that same
                        parking lot between the two houses and got down on one knee.
                        They spent their first weekend together as an engaged couple touring
                        the space needle, museums, going on cruises, and wandering around
                        the city together.
                    </p>
                    <p>
                        In the time that followed, Kelly and David moved out of their parents’
                        homes to their first apartment downtown. The two live on the main hub
                        street in Bellingham, WA in 700sq ft where the two are constantly learning
                        more and more about one another. They have also adopted two cats since then which they consider their fur-babies; Blancis and Fritz. Kelly recently graduated with her Bachelor’s
                        and is now working on her Secondary Education Teaching certificate,
                        David is working on game development projects in his free time, and
                        the two are planning a wedding and life together in the craziness of
                        the world today.
                    </p>
                </div>
            </div>

        </>
    )
}