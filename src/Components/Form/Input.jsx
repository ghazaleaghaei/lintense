
function Input({ title, onChange }) {
    return (
        <>
            <input
                value={title}
                type="text"
                placeholder={title}
                class="bg-sky-50 outline-none border rounded-lg p-2"
                onChange={onChange}
            />
        </>
    )
}

export default Input
