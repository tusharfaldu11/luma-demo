import { MoveRight } from "lucide-react";

function ContactForm() {
    return (
        <form className="flex flex-col gap-5 w-full max-w-[513px]">
            <div className="relative">
                <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full text-2xl max-md:text-base outline-none placeholder-gray-600 h-[57px] border-b border-black focus:border-b-2 focus:border-black border-t"
                />
            </div>

            <div className="relative">
                <input
                    type="email"
                    placeholder="johnsmith@gmail.com"
                    className="w-full text-2xl max-md:text-base outline-none placeholder-gray-600 h-[57px] border-b border-black focus:border-b-2 focus:border-black"
                />
            </div>

            <div className="relative">
                <textarea
                    className="w-full text-2xl max-md:text-base outline-none placeholder-gray-600 bg-transparent border-b border-black focus:border-b-2 focus:border-black h-[126px] md:min-h-[150px] resize-none"
                    placeholder="Message"
                />
            </div>

            <div className="relative">
                <button
                    type="submit"
                    className="flex w-full items-center justify-end"
                >
                    <MoveRight className="text-gray-500" />
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
