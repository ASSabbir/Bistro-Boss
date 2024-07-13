import banner from '../../assets/shop/banner2.jpg'
import MenuBanner from '../Shared/MenuBanner';
import ShopMenu from './ShopMenu';


const OurShop = () => {
    return (
        <div className="space-y-40">
            <MenuBanner img={banner} title={'OUR SHOP'} dis={'Would you like to try a dish?'} flag={true}></MenuBanner>
            <div className='max-w-screen-xl px-5 pb-20 space-y-20 mx-auto'>
                <ShopMenu></ShopMenu>
                
            </div>
        </div>
        
    );
};

export default OurShop;