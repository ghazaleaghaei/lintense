import { ArrowDown } from "../Svg/Exports"

function Accordion({ title, id, children, onOpenHandler, isOpen }) {

    return (
        <>
            <div class={`mx-5 bg-gray-50 text-black shadow-md p-2 my-5 rounded-lg duration-300 ${isOpen === id ? "max-h-100" : "max-h-10 overflow-hidden"}`}>
                <div
                    class="flex cursor-pointer"
                    onClick={() => { onOpenHandler(id) }}
                >
                    <strong>{title}</strong>
                    <ArrowDown class={`w-5 fill-black ms-auto duration-300 ${isOpen === id && "rotate-180"}`} />
                </div>
                <div class="p-2 font-light border-t-2 my-2">{children}</div>
            </div>
        </>
    )
}

export default Accordion
