
import logoWhite from '../../assets/logoGroupWhite.svg'
import logoBlack from '../../assets/logoGroupBlack.svg'

export function LogoGrid() {
    return (
        <section className="flex flex-row gap-[18px]">
            <div className="top-0 left-0">
                <img src={logoBlack} alt="logoBlack" className={`h-[90px] lg:h-[164px] w-[136px] lg:w-[247px] object-contain `} />
            </div>
            <div className="top-px">
                <img src={logoWhite} alt="logoBlack" className={`h-[90px] lg:h-[164px] w-[136px] lg:w-[247px] object-contain`} />
            </div>
        </section>
    );
}
