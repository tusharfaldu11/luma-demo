
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/logo-white.svg'
import logoBlack from '../../assets/logoGroupBlack.svg'

export const Logo = ({ isScrolled }) => {
    return (
        <div className={`flex items-center gap-2`}>
            
           {isScrolled ? (
                
                <img src={logoBlack} alt="logoBlack" className={`w-[38px] h-[30px] sm:w-[26.41px] sm:h-[21.56px] lg:w-[28.23px] lg:h-[23px] object-contain`} />
                
            ) : (
                
                    <img src={logoWhite} alt="logoBlack" className={`w-[38px] h-[30px] sm:w-[26.41px] sm:h-[21.56px] lg:w-[28.23px] lg:h-[23px] object-contain`} />
                
            )}
            {/* <img src={logoBlack} alt="logoBlack" className={`h-[23px] w-[28px] object-contain`} />
           

            <img src={logoWhite} alt="logoBlack" className={`h-[23px] w-[28px] object-contain`} /> */}

            <h1 className={`max-sm:hidden text-[30px] xl:text-[32px] leading-none whitespace-nowrap ${isScrolled ? 'text-black' : 'text-white mix-blend-difference'}`}>
                Luma
            </h1>
        </div>
    );
};
