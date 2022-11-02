import React from "react";

import { FilteredList } from "./components/FilteredList";

const LIST = [
    { name: 'Andrea', id: 1, age: 25 },
    { name: 'Gabriele', id: 2, age: 28 },
    { name: 'Diego', id: 3, age: 31},
    { name: 'Paolo', id: 4, age: 45 },
    { name: 'Franco', id: 5, age: 12 },
    { name: 'Giovanni', id: 6, age: 87 },
    { name: 'Asdrubale', id: 7, age: 41 },
    { name: 'Ermenegilda', id: 8, age: 23 },
    { name: 'Fikhr', id: 9, age: 35 },
    { name: 'Ahmed', id: 10, age: 12 },
  ];




export function App() {
    



    return (
        <div>
            <FilteredList list={LIST}/>
        </div>
    )

}