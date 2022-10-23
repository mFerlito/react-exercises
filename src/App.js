import React from "react";
import { Hello } from "./components/exercise"
import { Welcome } from './components/Welcome'

export class App extends React.Component {
  render() {
      return <div>
          <Hello />
          <Welcome name= "Marco" />
      </div>
  }
}