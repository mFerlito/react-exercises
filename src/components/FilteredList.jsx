import { useMemo } from "react"

export function FilteredList({ list }) {
    const filteredListArray = useMemo(() => {
        return list.filter((person) => person.age > 18)
    }, [list])

    return (
        <div>
            <h1>List</h1>
            <div >
                {filteredListArray.map((person) => (
                    <div key={person.name + ` ` + person.id}>
                        <p>{person.name+`'s `} Age: {person.age}</p>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}