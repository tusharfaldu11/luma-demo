import * as React from "react";
import { Plus, Minus } from "lucide-react";

const AccordionItem = ({ title, isLast }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const contentRef = React.useRef(null);

    // Calculate content height for smooth animation
    const contentHeight = isOpen ? `${contentRef.current?.scrollHeight}px` : "0px";

    return (
        <div className="relative w-full overflow-hidden">
            {/* Top border - consistent thickness */}
            <div className="absolute top-0 left-0 h-[1px] bg-black/20 w-full" />

            {/* Clickable header */}
            <button
                className="w-full h-[81px] flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3 className="text-2xl text-black mix-blend-difference max-sm:text-xl">
                    {title}
                </h3>

                {/* Animated icon */}
                <div className="w-6 h-6 flex items-center justify-center">
                    {isOpen ? (
                        <Minus className="w-5 h-5" />
                    ) : (
                        <Plus className="w-5 h-5" />
                    )}
                </div>
            </button>

            {/* Content area with smooth height transition */}
            <div
                ref={contentRef}
                style={{
                    height: contentHeight,
                    transition: "height 0.3s ease-out"
                }}
                className="overflow-hidden"
            >
                <div className="flex flex-col gap-4 pb-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            {/* Bottom border - shown when expanded OR if it's the last item */}
            {(isOpen || isLast) && (
                <div className="absolute bottom-0 left-0 h-[1px] bg-black/20 w-full" />
            )}
        </div>
    );
};

export default AccordionItem;