import { Accordion } from './Exports'
import { useState } from 'react'

function Accordions() {

    const data = [
        {
            id: 1,
            title: "title1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 2,
            title: "title2",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 3,
            title: "title3",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        
    ]
    const childData=[
        {
            id: 4,
            title: "title4",
        },
    ]
    const [isOpen, setIsOpen] = useState(null)
    const onOpenHandler = (id) => {
        id === isOpen ? setIsOpen(null) : setIsOpen(id)
    }
    return (
        <>
            {data?.map(item =>
                <Accordion
                    {...item}
                    key={item.id}
                    onOpenHandler={onOpenHandler}
                    isOpen={isOpen}
                >
                    {item.description}
                </Accordion>
            )}
            <Accordion 
                {...childData[0]}
                key={childData[0].id}
                onOpenHandler={onOpenHandler}
                isOpen={isOpen}
            >
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <ul class="list-disc">
                    <li>
                        What is Lorem Ipsum?
                    </li>
                    <li>
                        Why do we use it?
                    </li>
                </ul>
            </Accordion>
        </>
    )
}

export default Accordions
